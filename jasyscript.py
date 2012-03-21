# Core - JavaScript Foundation
# Copyright 2010-2012 Zynga Inc.

session.permutateField("es5")
session.permutateField("debug")


@task("Clear Cache")
def clear():
    session.clearCache()


@task("Fully cleaning up")
def distclean():
    session.clearCache()
    removeDir("api")
    removeDir("dist")


@task("Building API Viewer")
def api():
    runTask("api", "build")
    ApiWriter().write("data")


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

                