#
# This is the jasyscript.py of {{name}} file. 
# This file defines tasks for the Jasy build tool we use for development and deployment of {{name}}.
#

@task("Clear build cache")
def clean():
    session.clean()


@task("Clear caches and build results")
def distclean():
    session.clean()
    removeDir("build")
    removeDir("external")
    removeDir("source/script")


@task("Build API viewer")
def api():
    build(prefix="api")
    ApiWriter().write("data")


@task("Build self-contained deploy ready version")
def build():

    # Configure assets for being loaded from local asset folder
    assetManager.deploy(Resolver().addClassName("{{name}}.Main").getIncludedClasses())
    assetManager.addBuildProfile()
    
    # Write kernel script
    includedByKernel = storeKernel("script/kernel.js")

    # Copy files from source
    updateFile("source/index.html", "index.html")
    
    # Process every possible permutation
    for permutation in session.permutate():
        
        # Resolving dependencies
        resolver = Resolver().addClassName("{{name}}.Main").excludeClasses(includedByKernel)

        # Compressing classes
        storeCompressed(resolver.getSortedClasses(), "script/{{name}}-%s.js" % permutation.getChecksum(), "new {{name}}.Main;")


@task("Generate source version for development")
def source():

    # Configure assets for being loaded from source folders
    assetManager.addSourceProfile()

    # Write kernel script
    includedByKernel = storeKernel("script/kernel.js", debug=True)

    # Process every possible permutation
    for permutation in session.permutate():

        # Resolving dependencies
        resolver = Resolver().addClassName("{{name}}.Main").excludeClasses(includedByKernel)

        # Building class loader
        storeLoader(resolver.getSortedClasses(), "script/{{name}}-%s.js" % permutation.getChecksum(), "new {{name}}.Main;")

