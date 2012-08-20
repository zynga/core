#!/usr/bin/env python3

config.ask("What's your name", "name", "String")
config.ask("How old are you", "age", "Integer")
config.ask("What's PI", "pi", "Float")

config.save("custom", [1,2,3])
