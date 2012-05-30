# Configure
session.permutateField("es5")
session.setField("debug", True)
formatting.enable("semicolon")
formatting.enable("comma")


@task("Source")
def source():
    # Adding source asset profile
    session.getAssetManager().addSourceProfile()
    
    # Store kernel script
    includedByKernel = storeKernel("script/kernel.js", debug=True)
    
    # Process every possible permutation
    for permutation in session.permutate():

        # Resolving dependencies
        resolver = Resolver()
        resolver.addClassName("tests")
        resolver.excludeClasses(includedByKernel)
        
        # Writing source loader
        storeLoader(resolver, "script/test-%s.js" % permutation.getChecksum(), "QUnit.load();")


@task("Build")
def build():
    # Adding build asset profile
    session.getAssetManager().addBuildProfile()
    
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
        storeCompressed(resolver, "script/test-%s.js" % permutation.getChecksum(), "QUnit.load();")
    
    
@task("Clear Cache")
def clear():
    session.clean()
