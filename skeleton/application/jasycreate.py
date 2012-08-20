#!/usr/bin/env python3

# This script is executed by Jasy during creating new applications

config.ask("What's your name", "name", "String", defaultValue="Default User")
config.ask("How old are you", "age", "Integer")
config.ask("What's PI", "pi", "Float", defaultValue=3.14)
config.ask("Increment from 1..3", "incr", "List")

config.save("custom", [1,2,3])
