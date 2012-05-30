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


@task("Build module.js", prefix="dist")
def module():
    for permutation in session.permutate():
        resolver = Resolver().addClassName("core.Module")
        storeCompressed(resolver, "module-%s.js" % permutation.getChecksum())


@task("Build oo.js", prefix="dist")
def oo():
    for permutation in session.permutate():
        resolver = Resolver().addClassName("core.Module").addClassName("core.Class")
        storeCompressed(resolver, "oo-%s.js" % permutation.getChecksum())
        
        
@task("Build sugar.js", prefix="dist")
def sugar():
    for permutation in session.permutate():
        resolver = Resolver()
        resolver.addClassName("ext.sugar.Array")
        resolver.addClassName("ext.sugar.Function")
        resolver.addClassName("ext.sugar.Number")
        resolver.addClassName("ext.sugar.Object")
        resolver.addClassName("ext.sugar.String")

        storeCompressed(resolver, "sugar-%s.js" % permutation.getChecksum())

                