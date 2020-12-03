#!/bin/bash

filename="input"

cat "$filename" | while read a
do
	cat "$filename" | while read b
	do
		if [[ $((a+b)) == 2020 ]]
		then
			echo "match $a+$b: $((a+b)). Multiplied: $((a*b))"
		fi
	done
done
