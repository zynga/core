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


@task("Writing Module")
def module():
    setPrefix("dist")

    for permutation in session.permutate():
        resolver = Resolver(session.getProjects())
        resolver.addClassName("core.Module")
        classes = Sorter(resolver).getSortedClasses()

        print("Classes: %s" % classes)
        storeCompressed("module-%s.js" % getPermutation().getChecksum(), classes)


@task("Writing OO")
def oo():
    setPrefix("dist")
    
    for permutation in session.permutate():
        resolver = Resolver(session.getProjects())
        resolver.addClassName("core.Module")
        resolver.addClassName("core.Class")
        classes = Sorter(resolver).getSortedClasses()

        print("Classes: %s" % classes)
        storeCompressed("oo-%s.js" % getPermutation().getChecksum(), classes)
        
        
@task("Writing Sugar")
def sugar():
    setPrefix("dist")

    for permutation in session.permutate():
        resolver = Resolver(session.getProjects())
        resolver.addClassName("ext.sugar.Array")
        resolver.addClassName("ext.sugar.Function")
        resolver.addClassName("ext.sugar.Number")
        resolver.addClassName("ext.sugar.Object")
        resolver.addClassName("ext.sugar.String")
        classes = Sorter(resolver).getSortedClasses()

        print("Classes: %s" % classes)
        storeCompressed("sugar-%s.js" % getPermutation().getChecksum(), classes)
                
                