# Configure
session.permutateField("es5")
session.setField("debug", True)

jsFormatting.enable("semicolon")
jsFormatting.enable("comma")


@task("Source")
def source():
    # Adding source asset profile
    assetManager.addSourceProfile()
    
    # Store kernel script
    includedByKernel = storeKernel("script/kernel.js", debug=True)
    
    # Process every possible permutation
    for permutation in session.permutate():

        # Resolving dependencies
        resolver = Resolver()
        resolver.addClassName("tests")
        resolver.excludeClasses(includedByKernel)
        
        # Writing source loader
        storeLoader(resolver.getSortedClasses(), "script/test-%s.js" % permutation.getChecksum(), "QUnit.load();")


@task("Build")
def build():
    # Adding build asset profile
    assetManager.addBuildProfile()
    
    # Write kernel script
    includedByKernel = storeKernel("script/kernel.js", debug=True)

    # Copy files from source
    updateFile("source/index.html", "index.html")

    # Process every possible permutation
    for permutation in session.permutate():

        # Resolving dependencies
        resolver = Resolver()
        resolver.addClassName("tests")
        resolver.excludeClasses(includedByKernel)

        # Compressing classes
        storeCompressed(resolver.getSortedClasses(), "script/test-%s.js" % permutation.getChecksum(), "QUnit.load();")
    
    
@task("Clear Cache")
def clear():
    session.clean()
