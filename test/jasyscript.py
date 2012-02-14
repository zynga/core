session = Session()
session.addProject(Project("../"))
session.addProject(Project("."))

# Configure permutations
session.permutateField("es5")
session.setField("debug", True)

# Compiler configuration
optimization = Optimization("variables", "declarations", "blocks")
formatting = Formatting("semicolon", "comma")


@task("Source")
def source():
    # Include all game relevant assets
    resolver = Resolver(session.getProjects())
    resolver.addClassName("tests")
    assets = Asset(session, resolver.getIncludedClasses()).exportSource()

    # Store kernel script
    includedByKernel = storeKernel("source/script/kernel.js", session, assets=assets, debug=True, formatting=formatting)
    
    # Process every possible permutation
    for permutation in session.getPermutations():

        # Resolving dependencies
        resolver = Resolver(session.getProjects(), permutation)
        resolver.addClassName("tests")
        resolver.excludeClasses(includedByKernel)
        
        # Writing source loader
        destination = "source/script/test-%s.js" % permutation.getChecksum()
        classes = Sorter(resolver, permutation).getSortedClasses()
        storeSourceLoader(destination, classes, session, bootCode="QUnit.load();")
    


@task("Build")
def build():
    # Prepare assets
    resolver = Resolver(session.getProjects())
    resolver.addClassName("tests")
    assets = Asset(session, resolver.getIncludedClasses()).exportBuild()

    # Write kernel script
    includedByKernel = storeKernel("build/script/kernel.js", session, assets=assets, debug=True, formatting=formatting)

    # Copy files from source
    updateFile("source/index.html", "build/index.html")

    # Process every possible permutation
    for permutation in session.getPermutations():

        # Resolving dependencies
        resolver = Resolver(session.getProjects(), permutation)
        resolver.addClassName("tests")
        resolver.excludeClasses(includedByKernel)

        # Compressing classes
        classes = Sorter(resolver, permutation).getSortedClasses()
        compressedCode = storeCompressed("build/script/test-%s.js" % permutation.getChecksum(), classes, 
            permutation=permutation, optimization=optimization, formatting=formatting, bootCode="QUnit.load();")

    
    
    
@task("Clear Cache")
def clear():
    session.clearCache()
