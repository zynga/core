
@task("Writing Test Loader")
def test():
    session = Session()
    session.addProject(Project("../"))
    session.addProject(Project("."))
    
    resolver = Resolver(session.getProjects())
    resolver.addClassName("jquery")
    resolver.addClassName("qunit")
    resolver.addClassName("core.Bootstrap")
    resolver.addClassName("tests")
    classes = Sorter(resolver).getSortedClasses()

    storeCompressed("build.js", classes, formatting=Formatting("semicolon", "comma"))
    
    
    
@task("Clear Cache")
def clear():
    session = Session()
    session.addProject(Project("../"))
    session.addProject(Project("."))
    session.clearCache()
    session.close()    
