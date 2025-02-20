# MongoDB findOne: Handling Null Results

This repository demonstrates a common error when using MongoDB's `findOne()` method and provides a solution. The original code incorrectly handles the scenario where no matching document is found, leading to potential errors. The corrected version demonstrates how to properly check for null results and handle them gracefully.

## Problem
The original code fails to check if `findOne()` returns null when no document matches the specified query. This could lead to unexpected behavior or errors when trying to access properties of the `user` object.