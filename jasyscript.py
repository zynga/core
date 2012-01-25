#!/usr/bin/env jasy

@task("Clear Cache")
def clear():
    session = Session()
    session.addProject(Project("."))
    session.clearCache()
    session.close()



@task("Generate API Data")
def api():
    session = Session()
    session.addProject(Project("."))
    
    writer = ApiWriter(session)
    writer.write("api/data")
    # writer.write("api/packed", "msgpack")
        
    session.close()
        
