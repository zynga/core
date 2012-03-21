# Core - JavaScript Foundation
# Copyright 2010-2012 Zynga Inc.

session.permutateField("es5")
session.permutateField("debug")


@task("Clear build cache")
def clean():
    session.clearCache()


@task("Clear caches and build results")
def distclean():
    session.clearCache()
    removeDir("api")
    removeDir("dist")


@task("Build API Viewer")
def api():
    ApiWriter().write("data")
    runTask("api", "build")


@task("Write module.js", prefix="dist")
def module():
    for permutation in session.permutate():
        resolver = Resolver().addClassName("core.Module")
        storeCompressed("module-%s.js" % permutation.getChecksum(), Sorter(resolver).getSortedClasses())


@task("Write oo.js", prefix="dist")
def oo():
    for permutation in session.permutate():
        resolver = Resolver().addClassName("core.Module").addClassName("core.Class")
        storeCompressed("oo-%s.js" % permutation.getChecksum(), Sorter(resolver).getSortedClasses())
        
        
@task("Write sugar.js", prefix="dist")
def sugar():
    for permutation in session.permutate():
        resolver = Resolver()
        resolver.addClassName("ext.sugar.Array")
        resolver.addClassName("ext.sugar.Function")
        resolver.addClassName("ext.sugar.Number")
        resolver.addClassName("ext.sugar.Object")
        resolver.addClassName("ext.sugar.String")

        storeCompressed("sugar-%s.js" % permutation.getChecksum(), Sorter(resolver).getSortedClasses())

                