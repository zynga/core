#!/usr/bin/env jasy

optimization = Optimization("blocks", "declarations", "variables", "privates")
formatting = Formatting()

session = Session()
session.addProject(Project("."))
session.permutateField("es5")
session.permutateField("debug")

@task("Clear Cache")
def clear():
    session.clearCache()


@task("Store API Data")
def api():
    writer = ApiWriter(session)
    writer.write("api/data")


@task("Writing Module")
def module():
    for permutation in session.getPermutations():
        resolver = Resolver(session.getProjects(), permutation)
        resolver.addClassName("core.Module")
        classes = Sorter(resolver, permutation).getSortedClasses()

        print("Classes: %s" % classes)
        storeCompressed("dist/module-%s.js" % permutation.getKey(), classes, formatting=formatting, optimization=optimization)


@task("Writing OO")
def oo():
    for permutation in session.getPermutations():
        resolver = Resolver(session.getProjects(), permutation)
        resolver.addClassName("core.Module")
        resolver.addClassName("core.Class")
        classes = Sorter(resolver, permutation).getSortedClasses()

        print("Classes: %s" % classes)
        storeCompressed("dist/oo-%s.js" % permutation.getKey(), classes, formatting=formatting, optimization=optimization)