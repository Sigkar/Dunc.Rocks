#!/bin/bash
# Deploy to Firebase
npm install -g npm && npm i firebase-tools && npm run build && firebase deploy
