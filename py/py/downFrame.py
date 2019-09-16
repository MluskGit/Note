#! /usr/bin/python
# -*- coding: utf-8 -*-
import os
import sys
import time,shutil

oldPth = u"D:/work/art/trunk/动作_新/序列帧2".encode('gbk')
newPth = "F:/pic"
delDirNames = {
    'attack':['01','03','05','10','11'],
    'dead':['05','07','08','09'],
    'idle':['01','03','05','07'],
    'idle_2':['01','04','06','10'],
    'jifei':['01','05','09'],
    'walk':['01','03','06','09']
    }

dirIndex = {
    'attack':'1',
    'dead':'2',
    'idle':'3',
    'idle_2':'4',
    'jifei':'5',
    'walk':'6'
}


def cutFrame():
    print 'cutFrame'
    startTime = time.clock()
    os.chdir(newPth)
    print os.listdir(newPth)
    fileNames = os.listdir(newPth)
    for fileName in fileNames:
        if os.path.isdir(os.path.join(newPth,fileName)):
            childFilePath = os.path.join(newPth,fileName)
            for childFileName in os.listdir(childFilePath):
                if delDirNames.has_key(childFileName):
                    print delDirNames[childFileName]
                    grandChildFilePath = os.path.join(childFilePath,childFileName)
                    target = []
                    for targetStr in delDirNames[childFileName]:
                        target.append(childFileName+"_"+targetStr)
                        pass
                    print target
                    for grandChildFileName in os.listdir(grandChildFilePath):
                        for targetStr in target:
                            if grandChildFileName.find(targetStr) != -1:
                                os.remove(os.path.join(grandChildFilePath,grandChildFileName))
                                pass
                            pass
                        pass
                else:
                    print childFileName
                pass
            pass
        pass
    endTime = time.clock()
    print  endTime-startTime

def move():
    startTime = time.clock()
    os.chdir(oldPth)
    fileNames = os.listdir(oldPth)
    for fileName in fileNames:
        if os.path.isdir(os.path.join(oldPth,fileName)):
            childFilePath = os.path.join(oldPth,fileName)
            print childFilePath
            for childFileName in os.listdir(childFilePath):
                if delDirNames.has_key(childFileName):
                    newDir = os.path.join(newPth,fileName+'_'+dirIndex[childFileName])
                    if os.path.exists(newDir):
                        continue
                    os.mkdir(newDir)
                    shutil.copyfile(childFilePath,newDir)
                pass
            pass
    pass
    endTime = time.clock()
    print  endTime-startTime

if __name__=='__main__':
    move()

    
