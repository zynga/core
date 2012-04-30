# Configure permutations
session.permutateField("es5")
session.setField("debug", True)


@task("Source")
def source():
    # Include all game relevant assets
    resolver = Resolver().addClassName("tests")
    assets = AssetManager(resolver.getIncludedClasses()).exportSource()

    # Store kernel script
    includedByKernel = storeKernel("source/script/kernel.js", assets=assets, debug=True)
    
    # Process every possible permutation
    for permutation in session.permutate():

        # Resolving dependencies
        resolver = Resolver()
        resolver.addClassName("tests")
        resolver.excludeClasses(includedByKernel)
        
        # Writing source loader
        classes = Sorter(resolver).getSortedClasses()
        storeLoader("source/script/test-%s.js" % permutation.getChecksum(), classes, bootCode="QUnit.load();")


@task("Build")
def build():
    # Prepare assets
    resolver = Resolver().addClassName("tests")
    assets = AssetManager(resolver.getIncludedClasses()).exportBuild()

    # Write kernel script
    includedByKernel = storeKernel("build/script/kernel.js", assets=assets, debug=True)

    # Copy files from source
    updateFile("source/index.html", "build/index.html")

    # Process every possible permutation
    for permutation in session.permutate():

        # Resolving dependencies
        resolver = Resolver()
        resolver.addClassName("tests")
        resolver.excludeClasses(includedByKernel)

        # Compressing classes
        classes = Sorter(resolver).getSortedClasses()
        storeCompressed("build/script/test-%s.js" % permutation.getChecksum(), classes, bootCode="QUnit.load();")
    
    
@task("Clear Cache")
def clear():
    session.clearCache()
