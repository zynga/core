#!/usr/bin/env jasy

@task("Clear Cache")
def clear():
    # Setup session
    session = Session()

    # Clearing cache
    logging.info("Clearing cache...")
    session.clearCache()



@task("Build")
def build():
    # Setup session
    session = Session()

    session.addProject(Project("../../"))
    session.addProject(Project("."))
    
    session.permutateField("debug")
    session.permutateField("es5")
    session.permutateField("engine")
    session.permutateField("locale", ["en"])
    
    # Permutation independend config
    optimization = Optimization("unused", "privates", "variables", "declarations", "blocks")
    formatting = Formatting()

    # Store loader script
    includedByKernel = storeKernel("build/loader.js", session)
    
    # Copy HTML file from source
    updateFile("index.html", "build/index.html")

    # Process every possible permutation
    for permutation in session.getPermutations():
        # Get projects
        projects = session.getProjects()

        # Resolving dependencies
        resolver = Resolver(projects, permutation)
        resolver.addClassName("oo.Test")
        resolver.excludeClasses(includedByKernel)
        classes = resolver.getIncludedClasses()

        # Compressing classes
        translation = session.getTranslation(permutation.get("locale"))
        classes = Sorter(resolver, permutation).getSortedClasses()
        compressedCode = storeCompressed("build/oo-%s.js" % permutation.getChecksum(), classes, 
            permutation=permutation, translation=translation, optimization=optimization, formatting=formatting)
        
