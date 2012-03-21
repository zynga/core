#!/usr/bin/env jasy

session.permutateField("es5")
session.permutateField("debug")

@task("Clear Cache")
def clear():
    session.clearCache()


@task("Building API Viewer")
def api(prefix="api"):
    setPrefix(prefix)
    runTask("api", "build")
    ApiWriter().write("data")
    
    
@task("Fully cleaning up")
def distclean():
    session.clearCache()
    removeDir("api")
    removeDir("dist")


@task("Writing Module")
def module():
    setPrefix("dist")

    for permutation in session.permutate():
        resolver = Resolver()
        resolver.addClassName("core.Module")

        storeCompressed("module-%s.js" % permutation.getChecksum(), Sorter(resolver).getSortedClasses())


@task("Writing OO")
def oo():
    setPrefix("dist")
    
    for permutation in session.permutate():
        resolver = Resolver()
        resolver.addClassName("core.Module")
        resolver.addClassName("core.Class")

        storeCompressed("oo-%s.js" % permutation.getChecksum(), Sorter(resolver).getSortedClasses())
        
        
@task("Writing Sugar")
def sugar():
    setPrefix("dist")

    for permutation in session.permutate():
        resolver = Resolver()
        resolver.addClassName("ext.sugar.Array")
        resolver.addClassName("ext.sugar.Function")
        resolver.addClassName("ext.sugar.Number")
        resolver.addClassName("ext.sugar.Object")
        resolver.addClassName("ext.sugar.String")

        storeCompressed("sugar-%s.js" % permutation.getChecksum(), Sorter(resolver).getSortedClasses())

                