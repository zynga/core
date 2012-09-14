# Configure
session.permutateField("es5")
session.setField("debug", True)


@task("Source")
def source():
    # Initialize shared objects
    assetManager = AssetManager(session)
    assetManager.addSourceProfile()
    outputManager = OutputManager(session, assetManager, compressionLevel=0, formattingLevel=1)
    fileManager = FileManager(session)
    
    # Store kernel script
    outputManager.storeKernel("$prefix/script/kernel.js", debug=True, classes=["core.io.Asset", "core.io.StyleSheet"])
    
    # Process every possible permutation
    for permutation in session.permutate():

        # Resolving dependencies
        classes = Resolver(session).addClassName("tests").getSortedClasses()
        
        # Writing source loader
        outputManager.storeLoader(classes, "$prefix/script/test-$permutation.js", "QUnit.load();")


@task("Build")
def build():
    # Initialize shared objects
    assetManager = AssetManager(session)
    assetManager.addBuildProfile()
    assetManager.deploy(Resolver(session).addClassName("tests").getIncludedClasses())
    outputManager = OutputManager(session, assetManager, compressionLevel=2)
    fileManager = FileManager(session)

    # Write kernel script
    outputManager.storeKernel("$prefix/script/kernel.js", debug=True, classes=["core.io.Asset", "core.io.StyleSheet"])

    # Copy files from source
    fileManager.updateFile("source/index.html", "$prefix/index.html")

    # Process every possible permutation
    for permutation in session.permutate():

        # Resolving dependencies
        classes = Resolver(session).addClassName("tests").getSortedClasses()

        # Compressing classes
        outputManager.storeCompressed(classes, "$prefix/script/test-$permutation.js", "QUnit.load();")
    
    
@task("Clear cache")
def clean():
    session.clean()
    Repository.clean()


@task("Clear cache and repository")
def distclean():
    session.clean()
    Repository.distclean()
