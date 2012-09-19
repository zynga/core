#
# This is the jasyscript.py of $${name} file. 
# This file defines tasks for the Jasy build tool we use for development and deployment of $${name}.
#

@task
def clean():
    """Clear build cache"""
    
    session.clean()
    Repository.clean()


@task
def distclean():
    """Clear caches and build results"""
    
    session.clean()
    Repository.distclean()


@task
def api():
    """Build API viewer"""
    
    Task.runTask("apibrowser", "build")
    ApiWriter(session).write("data")
    
    
@task
def server():
    """Start HTTP server"""
    
    Server().start()


@task
def source():
    """Generate source (development) version"""

    # Initialize shared objects
    assetManager = AssetManager(session).addSourceProfile()
    outputManager = OutputManager(session, assetManager, compressionLevel=0, formattingLevel=1)
    fileManager = FileManager(session)
    
    # Store kernel script
    outputManager.storeKernel("$prefix/script/kernel.js", debug=True)
    
    # Process every possible permutation
    for permutation in session.permutate():

        # Resolving dependencies
        classes = Resolver(session).addClassName("$${name}.Main").getSortedClasses()
        
        # Writing source loader
        outputManager.storeLoader(classes, "$prefix/script/$${name}-$permutation.js", "new $${name}.Main;")


@task
def build():
    """Generate deployable and combined build version"""

    # Initialize shared objects
    assetManager = AssetManager(session).addBuildProfile()
    outputManager = OutputManager(session, assetManager, compressionLevel=2)
    fileManager = FileManager(session)

    # Deploy assets
    outputManager.deployAssets(["$${name}.Main"])

    # Write kernel script
    outputManager.storeKernel("$prefix/script/kernel.js", debug=True)

    # Copy files from source
    fileManager.updateFile("source/index.html", "$prefix/index.html")

    # Process every possible permutation
    for permutation in session.permutate():

        # Resolving dependencies
        classes = Resolver(session).addClassName("$${name}.Main").getSortedClasses()

        # Compressing classes
        outputManager.storeCompressed(classes, "$prefix/script/$${name}-$permutation.js", "new $${name}.Main;")

