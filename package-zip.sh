#!/bin/sh
# Run from the folder that CONTAINS aftab-fabrics-luxury/
zip -qr aftab-fabrics-luxury.zip aftab-fabrics-luxury -x "*/node_modules/*" "*/.next/*"
