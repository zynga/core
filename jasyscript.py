#!/usr/bin/env jasy

@task("Clear Cache")
def clear():
    session = Session()
    session.addProject(Project("."))
    session.clearCache()
    session.close()


@task("Store API Data")
def api():
    session = Session()
    session.addProject(Project("."))
    
    writer = ApiWriter(session)
    writer.write("api/data")
    # writer.write("api/packed", "msgpack")
        
    session.close()
        
        
@task("Writing Core")
def core():
    session = Session()
    session.addProject(Project("."))

    resolver = Resolver(session.getProjects())
    resolver.addClassName("core.Module")
    classes = Sorter(resolver).getSortedClasses()

    storeCompressed("dist/core.js", classes, formatting=Formatting("semicolon", "comma"))

