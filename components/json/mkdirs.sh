#!/bin/bash
echo "Bash version ${BASH_VERSION}..."
for i in {0..34}
  do 
     mkdir "$i"
     touch "$i/companies.json"
 done
