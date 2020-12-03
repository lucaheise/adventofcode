#!/bin/bash

filename="input"

while read a
do
	while read b
	do
		while read c
		do
			#echo "$a+$b+$c"
			if [[ $((a+b+c)) == 2020 ]]
			then
				echo "match $a+$b+$c: $((a+b+c)). Multiplied: $((a*b*c))"
			fi
		done <"$filename"
	done <"$filename"
done <"$filename"
