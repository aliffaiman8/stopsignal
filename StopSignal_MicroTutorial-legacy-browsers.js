/********************************* 
 * Stopsignal_Microtutorial *
 *********************************/


// store info about the experiment session:
let expName = 'StopSignal_MicroTutorial';  // from the Builder filename that created this script
let expInfo = {
    'nombor maktab': '',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1,1,1]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const SS_instruction_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(SS_instruction_loopLoopBegin(SS_instruction_loopLoopScheduler));
flowScheduler.add(SS_instruction_loopLoopScheduler);
flowScheduler.add(SS_instruction_loopLoopEnd);


const SS_main_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(SS_main_loopLoopBegin(SS_main_loopLoopScheduler));
flowScheduler.add(SS_main_loopLoopScheduler);
flowScheduler.add(SS_main_loopLoopEnd);






flowScheduler.add(datapipeRoutineBegin());
flowScheduler.add(datapipeRoutineEachFrame());
flowScheduler.add(datapipeRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Terima kasih kerana sabar menunggu. Anda boleh tutup paparan ini.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Terima kasih kerana sabar menunggu. Anda boleh tutup paparan ini.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'SS_Signal_Asset/SS_instruction.xlsx', 'path': 'SS_Signal_Asset/SS_instruction.xlsx'},
    {'name': 'SS_Signal_Asset/1_MY.jpg', 'path': 'SS_Signal_Asset/1_MY.jpg'},
    {'name': 'SS_Signal_Asset/2_MY.jpg', 'path': 'SS_Signal_Asset/2_MY.jpg'},
    {'name': 'SS_Signal_Asset/3_MY.jpg', 'path': 'SS_Signal_Asset/3_MY.jpg'},
    {'name': 'SS_Signal_Asset/4_MY.jpg', 'path': 'SS_Signal_Asset/4_MY.jpg'},
    {'name': 'SS_Signal_Asset/5_MY.jpg', 'path': 'SS_Signal_Asset/5_MY.jpg'},
    {'name': 'SS_Signal_Asset/6_MY.jpg', 'path': 'SS_Signal_Asset/6_MY.jpg'},
    {'name': 'SS_Signal_Asset/7_MY.jpg', 'path': 'SS_Signal_Asset/7_MY.jpg'},
    {'name': 'SS_Signal_Asset/8_MY.jpg', 'path': 'SS_Signal_Asset/8_MY.jpg'},
    {'name': 'SS_Signal_Asset/9_MY.jpg', 'path': 'SS_Signal_Asset/9_MY.jpg'},
    {'name': 'SS_Signal_Asset/10_MY.jpg', 'path': 'SS_Signal_Asset/10_MY.jpg'},
    {'name': 'SS_Signal_Asset/11_MY.jpg', 'path': 'SS_Signal_Asset/11_MY.jpg'},
    {'name': 'SS_Signal_Asset/SS_main.xlsx', 'path': 'SS_Signal_Asset/SS_main.xlsx'},
    {'name': 'SS_Signal_Asset/12_MY.jpg', 'path': 'SS_Signal_Asset/12_MY.jpg'},
    {'name': 'SS_Signal_Asset/13_MY.jpg', 'path': 'SS_Signal_Asset/13_MY.jpg'},
    {'name': 'SS_Signal_Asset/14_MY.jpg', 'path': 'SS_Signal_Asset/14_MY.jpg'},
    {'name': 'SS_Signal_Asset/SS_trials.xlsx', 'path': 'SS_Signal_Asset/SS_trials.xlsx'},
    {'name': 'SS_Signal_Asset/Left_Football.png', 'path': 'SS_Signal_Asset/Left_Football.png'},
    {'name': 'SS_Signal_Asset/Right_Football.png', 'path': 'SS_Signal_Asset/Right_Football.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'SS_Signal_Asset/whistle.wav', 'path': 'SS_Signal_Asset/whistle.wav'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["nombor maktab"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var SS_instructionClock;
var SS_trials_sound_start;
var SSTrialsGoMaxTime;
var SSTrialsNoGoTime;
var SSThisTrialsTime;
var SSTrialsCount;
var SS_intruction_image;
var SS_instruction_sound;
var SS_instruction_key_resp;
var SS_ISIClock;
var SS_ISI_text;
var SS_trialsClock;
var SS_trials_image;
var SS_trials_sound;
var SS_trials_key_resp;
var SS_break_or_endClock;
var SS_break_image;
var SS_break_key_resp;
var datapipeClock;
var text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "SS_instruction"
  SS_instructionClock = new util.Clock();
  // Run 'Begin Experiment' code from SS_initializer
  SS_trials_sound_start = 0.25;
  SSTrialsGoMaxTime = 30;
  SSTrialsNoGoTime = 3;
  SSThisTrialsTime = 0;
  SSTrialsCount = 0;
  
  SS_intruction_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'SS_intruction_image', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.2, 0.9],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512.0, interpolate : true, depth : -1.0 
  });
  SS_instruction_sound = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  SS_instruction_sound.setVolume(1.0);
  SS_instruction_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "SS_ISI"
  SS_ISIClock = new util.Clock();
  SS_ISI_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'SS_ISI_text',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([-1.000,-1.000,-1.000]),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "SS_trials"
  SS_trialsClock = new util.Clock();
  SS_trials_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'SS_trials_image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.6, 0.45],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  SS_trials_sound = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  SS_trials_sound.setVolume(1.0);
  SS_trials_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "SS_break_or_end"
  SS_break_or_endClock = new util.Clock();
  SS_break_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'SS_break_image', units : 'height', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.2, 0.9],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  SS_break_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "datapipe"
  datapipeClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Sila tunggu sementara data disimpan...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var SS_instruction_loop;
function SS_instruction_loopLoopBegin(SS_instruction_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    SS_instruction_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'SS_Signal_Asset/SS_instruction.xlsx',
      seed: undefined, name: 'SS_instruction_loop'
    });
    psychoJS.experiment.addLoop(SS_instruction_loop); // add the loop to the experiment
    currentLoop = SS_instruction_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    SS_instruction_loop.forEach(function() {
      snapshot = SS_instruction_loop.getSnapshot();
    
      SS_instruction_loopLoopScheduler.add(importConditions(snapshot));
      SS_instruction_loopLoopScheduler.add(SS_instructionRoutineBegin(snapshot));
      SS_instruction_loopLoopScheduler.add(SS_instructionRoutineEachFrame());
      SS_instruction_loopLoopScheduler.add(SS_instructionRoutineEnd(snapshot));
      SS_instruction_loopLoopScheduler.add(SS_instruction_loopLoopEndIteration(SS_instruction_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function SS_instruction_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(SS_instruction_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function SS_instruction_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var SS_main_loop;
function SS_main_loopLoopBegin(SS_main_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    SS_main_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'SS_Signal_Asset/SS_main.xlsx',
      seed: undefined, name: 'SS_main_loop'
    });
    psychoJS.experiment.addLoop(SS_main_loop); // add the loop to the experiment
    currentLoop = SS_main_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    SS_main_loop.forEach(function() {
      snapshot = SS_main_loop.getSnapshot();
    
      SS_main_loopLoopScheduler.add(importConditions(snapshot));
      const SS_trials_loopLoopScheduler = new Scheduler(psychoJS);
      SS_main_loopLoopScheduler.add(SS_trials_loopLoopBegin(SS_trials_loopLoopScheduler, snapshot));
      SS_main_loopLoopScheduler.add(SS_trials_loopLoopScheduler);
      SS_main_loopLoopScheduler.add(SS_trials_loopLoopEnd);
      SS_main_loopLoopScheduler.add(SS_break_or_endRoutineBegin(snapshot));
      SS_main_loopLoopScheduler.add(SS_break_or_endRoutineEachFrame());
      SS_main_loopLoopScheduler.add(SS_break_or_endRoutineEnd(snapshot));
      SS_main_loopLoopScheduler.add(SS_main_loopLoopEndIteration(SS_main_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var SS_trials_loop;
function SS_trials_loopLoopBegin(SS_trials_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    SS_trials_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'SS_Signal_Asset/SS_trials.xlsx',
      seed: undefined, name: 'SS_trials_loop'
    });
    psychoJS.experiment.addLoop(SS_trials_loop); // add the loop to the experiment
    currentLoop = SS_trials_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    SS_trials_loop.forEach(function() {
      snapshot = SS_trials_loop.getSnapshot();
    
      SS_trials_loopLoopScheduler.add(importConditions(snapshot));
      SS_trials_loopLoopScheduler.add(SS_ISIRoutineBegin(snapshot));
      SS_trials_loopLoopScheduler.add(SS_ISIRoutineEachFrame());
      SS_trials_loopLoopScheduler.add(SS_ISIRoutineEnd(snapshot));
      SS_trials_loopLoopScheduler.add(SS_trialsRoutineBegin(snapshot));
      SS_trials_loopLoopScheduler.add(SS_trialsRoutineEachFrame());
      SS_trials_loopLoopScheduler.add(SS_trialsRoutineEnd(snapshot));
      SS_trials_loopLoopScheduler.add(SS_trials_loopLoopEndIteration(SS_trials_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function SS_trials_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(SS_trials_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function SS_trials_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function SS_main_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(SS_main_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function SS_main_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var t;
var frameN;
var continueRoutine;
var SS_instructionMaxDurationReached;
var _SS_instruction_key_resp_allKeys;
var SS_instructionMaxDuration;
var SS_instructionComponents;
function SS_instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'SS_instruction' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    SS_instructionClock.reset();
    routineTimer.reset();
    SS_instructionMaxDurationReached = false;
    // update component parameters for each repeat
    SS_intruction_image.setImage(SS_instruction_image_pic);
    SS_instruction_sound.setValue('SS_Signal_Asset/whistle.wav');
    SS_instruction_sound.setVolume(SS_instruction_sound_volume);
    SS_instruction_key_resp.keys = undefined;
    SS_instruction_key_resp.rt = undefined;
    _SS_instruction_key_resp_allKeys = [];
    psychoJS.experiment.addData('SS_instruction.started', globalClock.getTime());
    SS_instructionMaxDuration = null
    // keep track of which components have finished
    SS_instructionComponents = [];
    SS_instructionComponents.push(SS_intruction_image);
    SS_instructionComponents.push(SS_instruction_sound);
    SS_instructionComponents.push(SS_instruction_key_resp);
    
    SS_instructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function SS_instructionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'SS_instruction' ---
    // get current time
    t = SS_instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *SS_intruction_image* updates
    if (t >= 0.0 && SS_intruction_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SS_intruction_image.tStart = t;  // (not accounting for frame time here)
      SS_intruction_image.frameNStart = frameN;  // exact frame index
      
      SS_intruction_image.setAutoDraw(true);
    }
    
    // start/stop SS_instruction_sound
    if (t >= 0.25 && SS_instruction_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SS_instruction_sound.tStart = t;  // (not accounting for frame time here)
      SS_instruction_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ SS_instruction_sound.play(); });  // screen flip
      SS_instruction_sound.status = PsychoJS.Status.STARTED;
    }
    if (t >= (SS_instruction_sound.getDuration() + SS_instruction_sound.tStart)     && SS_instruction_sound.status === PsychoJS.Status.STARTED) {
      SS_instruction_sound.stop();  // stop the sound (if longer than duration)
      SS_instruction_sound.status = PsychoJS.Status.FINISHED;
    }
    
    // *SS_instruction_key_resp* updates
    if (t >= 0.0 && SS_instruction_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SS_instruction_key_resp.tStart = t;  // (not accounting for frame time here)
      SS_instruction_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { SS_instruction_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { SS_instruction_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { SS_instruction_key_resp.clearEvents(); });
    }
    
    if (SS_instruction_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = SS_instruction_key_resp.getKeys({keyList: ['g'], waitRelease: false});
      _SS_instruction_key_resp_allKeys = _SS_instruction_key_resp_allKeys.concat(theseKeys);
      if (_SS_instruction_key_resp_allKeys.length > 0) {
        SS_instruction_key_resp.keys = _SS_instruction_key_resp_allKeys[_SS_instruction_key_resp_allKeys.length - 1].name;  // just the last key pressed
        SS_instruction_key_resp.rt = _SS_instruction_key_resp_allKeys[_SS_instruction_key_resp_allKeys.length - 1].rt;
        SS_instruction_key_resp.duration = _SS_instruction_key_resp_allKeys[_SS_instruction_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    SS_instructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SS_instructionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'SS_instruction' ---
    SS_instructionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('SS_instruction.stopped', globalClock.getTime());
    SS_instruction_sound.stop();  // ensure sound has stopped at end of Routine
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(SS_instruction_key_resp.corr, level);
    }
    psychoJS.experiment.addData('SS_instruction_key_resp.keys', SS_instruction_key_resp.keys);
    if (typeof SS_instruction_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('SS_instruction_key_resp.rt', SS_instruction_key_resp.rt);
        psychoJS.experiment.addData('SS_instruction_key_resp.duration', SS_instruction_key_resp.duration);
        routineTimer.reset();
        }
    
    SS_instruction_key_resp.stop();
    // the Routine "SS_instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var SS_ISIMaxDurationReached;
var SS_ISIMaxDuration;
var SS_ISIComponents;
function SS_ISIRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'SS_ISI' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    SS_ISIClock.reset(routineTimer.getTime());
    routineTimer.add(0.750000);
    SS_ISIMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('SS_ISI.started', globalClock.getTime());
    SS_ISIMaxDuration = null
    // keep track of which components have finished
    SS_ISIComponents = [];
    SS_ISIComponents.push(SS_ISI_text);
    
    SS_ISIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function SS_ISIRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'SS_ISI' ---
    // get current time
    t = SS_ISIClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *SS_ISI_text* updates
    if (t >= 0.0 && SS_ISI_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SS_ISI_text.tStart = t;  // (not accounting for frame time here)
      SS_ISI_text.frameNStart = frameN;  // exact frame index
      
      SS_ISI_text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.75 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (SS_ISI_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      SS_ISI_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    SS_ISIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SS_ISIRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'SS_ISI' ---
    SS_ISIComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('SS_ISI.stopped', globalClock.getTime());
    if (SS_ISIMaxDurationReached) {
        SS_ISIClock.add(SS_ISIMaxDuration);
    } else {
        SS_ISIClock.add(0.750000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var SS_trialsMaxDurationReached;
var _SS_trials_key_resp_allKeys;
var SS_trialsMaxDuration;
var SS_trialsComponents;
function SS_trialsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'SS_trials' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    SS_trialsClock.reset();
    routineTimer.reset();
    SS_trialsMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from SS_trials_code
    if ((SS_trials_sound_volume === 1)) {
        SSThisTrialsTime = SSTrialsNoGoTime;
    } else {
        SSThisTrialsTime = SSTrialsGoMaxTime;
    }
    
    SS_trials_image.setImage(SS_trials_image_pic);
    SS_trials_sound.setValue('SS_Signal_Asset/whistle.wav');
    SS_trials_sound.setVolume(SS_trials_sound_volume);
    SS_trials_key_resp.keys = undefined;
    SS_trials_key_resp.rt = undefined;
    _SS_trials_key_resp_allKeys = [];
    psychoJS.experiment.addData('SS_trials.started', globalClock.getTime());
    SS_trialsMaxDuration = null
    // keep track of which components have finished
    SS_trialsComponents = [];
    SS_trialsComponents.push(SS_trials_image);
    SS_trialsComponents.push(SS_trials_sound);
    SS_trialsComponents.push(SS_trials_key_resp);
    
    SS_trialsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function SS_trialsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'SS_trials' ---
    // get current time
    t = SS_trialsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from SS_trials_code
    if ((SS_trials_sound_volume === 0)) {
        if (SS_trials_key_resp.keys) {
            continueRoutine = false;
        }
    }
    
    
    // *SS_trials_image* updates
    if (t >= 0.0 && SS_trials_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SS_trials_image.tStart = t;  // (not accounting for frame time here)
      SS_trials_image.frameNStart = frameN;  // exact frame index
      
      SS_trials_image.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + SSThisTrialsTime - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (SS_trials_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      SS_trials_image.setAutoDraw(false);
    }
    
    // start/stop SS_trials_sound
    if (t >= SS_trials_sound_start && SS_trials_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SS_trials_sound.tStart = t;  // (not accounting for frame time here)
      SS_trials_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ SS_trials_sound.play(); });  // screen flip
      SS_trials_sound.status = PsychoJS.Status.STARTED;
    }
    if (t >= (SS_trials_sound.getDuration() + SS_trials_sound.tStart)     && SS_trials_sound.status === PsychoJS.Status.STARTED) {
      SS_trials_sound.stop();  // stop the sound (if longer than duration)
      SS_trials_sound.status = PsychoJS.Status.FINISHED;
    }
    
    // *SS_trials_key_resp* updates
    if (t >= 0.0 && SS_trials_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SS_trials_key_resp.tStart = t;  // (not accounting for frame time here)
      SS_trials_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { SS_trials_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { SS_trials_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { SS_trials_key_resp.clearEvents(); });
    }
    
    frameRemains = 0.0 + SSThisTrialsTime - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (SS_trials_key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      SS_trials_key_resp.status = PsychoJS.Status.FINISHED;
        }
      
    if (SS_trials_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = SS_trials_key_resp.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _SS_trials_key_resp_allKeys = _SS_trials_key_resp_allKeys.concat(theseKeys);
      if (_SS_trials_key_resp_allKeys.length > 0) {
        SS_trials_key_resp.keys = _SS_trials_key_resp_allKeys.map((key) => key.name);  // storing all keys
        SS_trials_key_resp.rt = _SS_trials_key_resp_allKeys.map((key) => key.rt);
        SS_trials_key_resp.duration = _SS_trials_key_resp_allKeys.map((key) => key.duration);
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    SS_trialsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SS_trialsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'SS_trials' ---
    SS_trialsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('SS_trials.stopped', globalClock.getTime());
    // Run 'End Routine' code from SS_trials_code
    if ((SS_trials_sound_volume === 1)) {
        if (SS_trials_key_resp.keys) {
            if ((SS_trials_sound_start > 0.051)) {
                SS_trials_sound_start -= 0.05;
            }
        } else {
            if ((SS_trials_sound_start < 1.5)) {
                SS_trials_sound_start += 0.05;
            }
        }
    }
    SSTrialsCount += 1;
    if ((SSTrialsCount >= 6)) {
        SSTrialsCount = 0;
        SS_trials_loop.finished = true;
    }
    psychoJS.experiment.addData("SS_trials_sound_start", SS_trials_sound_start);
    psychoJS.experiment.addData("SS_trials_sound.tStart", SS_trials_sound.tStart);
    
    SS_trials_sound.stop();  // ensure sound has stopped at end of Routine
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(SS_trials_key_resp.corr, level);
    }
    psychoJS.experiment.addData('SS_trials_key_resp.keys', SS_trials_key_resp.keys);
    if (typeof SS_trials_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('SS_trials_key_resp.rt', SS_trials_key_resp.rt);
        psychoJS.experiment.addData('SS_trials_key_resp.duration', SS_trials_key_resp.duration);
        }
    
    SS_trials_key_resp.stop();
    // the Routine "SS_trials" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var SS_break_or_endMaxDurationReached;
var _SS_break_key_resp_allKeys;
var SS_break_or_endMaxDuration;
var SS_break_or_endComponents;
function SS_break_or_endRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'SS_break_or_end' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    SS_break_or_endClock.reset();
    routineTimer.reset();
    SS_break_or_endMaxDurationReached = false;
    // update component parameters for each repeat
    SS_break_image.setImage(SS_break_image_pic);
    SS_break_key_resp.keys = undefined;
    SS_break_key_resp.rt = undefined;
    _SS_break_key_resp_allKeys = [];
    psychoJS.experiment.addData('SS_break_or_end.started', globalClock.getTime());
    SS_break_or_endMaxDuration = null
    // keep track of which components have finished
    SS_break_or_endComponents = [];
    SS_break_or_endComponents.push(SS_break_image);
    SS_break_or_endComponents.push(SS_break_key_resp);
    
    SS_break_or_endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function SS_break_or_endRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'SS_break_or_end' ---
    // get current time
    t = SS_break_or_endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *SS_break_image* updates
    if (t >= 0.0 && SS_break_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SS_break_image.tStart = t;  // (not accounting for frame time here)
      SS_break_image.frameNStart = frameN;  // exact frame index
      
      SS_break_image.setAutoDraw(true);
    }
    
    
    // *SS_break_key_resp* updates
    if (t >= 0.0 && SS_break_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SS_break_key_resp.tStart = t;  // (not accounting for frame time here)
      SS_break_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { SS_break_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { SS_break_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { SS_break_key_resp.clearEvents(); });
    }
    
    if (SS_break_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = SS_break_key_resp.getKeys({keyList: ['g'], waitRelease: false});
      _SS_break_key_resp_allKeys = _SS_break_key_resp_allKeys.concat(theseKeys);
      if (_SS_break_key_resp_allKeys.length > 0) {
        SS_break_key_resp.keys = _SS_break_key_resp_allKeys[_SS_break_key_resp_allKeys.length - 1].name;  // just the last key pressed
        SS_break_key_resp.rt = _SS_break_key_resp_allKeys[_SS_break_key_resp_allKeys.length - 1].rt;
        SS_break_key_resp.duration = _SS_break_key_resp_allKeys[_SS_break_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    SS_break_or_endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SS_break_or_endRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'SS_break_or_end' ---
    SS_break_or_endComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('SS_break_or_end.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(SS_break_key_resp.corr, level);
    }
    psychoJS.experiment.addData('SS_break_key_resp.keys', SS_break_key_resp.keys);
    if (typeof SS_break_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('SS_break_key_resp.rt', SS_break_key_resp.rt);
        psychoJS.experiment.addData('SS_break_key_resp.duration', SS_break_key_resp.duration);
        routineTimer.reset();
        }
    
    SS_break_key_resp.stop();
    // the Routine "SS_break_or_end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var datapipeMaxDurationReached;
var datapipeMaxDuration;
var datapipeComponents;
function datapipeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'datapipe' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    datapipeClock.reset();
    routineTimer.reset();
    datapipeMaxDurationReached = false;
    // update component parameters for each repeat
    // Disable PsychoJS auto-saving (if applicable)
    psychoJS._saveResults = 0;
    
    // Generate filename for results
    const filename = `${psychoJS._experiment._experimentName}_${psychoJS._experiment._datetime}.csv`;
    
    // Extract data object from experiment
    const dataObj = psychoJS._experiment._trialsData;
    
    // Guard: ensure we have trial data
    if (!Array.isArray(dataObj) || dataObj.length === 0) {
      console.error('No trial data found in psychoJS._experiment._trialsData');
    } else {
      // Convert data object to CSV
      const headers = Object.keys(dataObj[0]);
      const rows = dataObj.map(row => headers.map(h => row[h]));
      const data = [headers.join(','), ...rows.map(r => r.map(v => String(v).replace(/"/g, '""')).join(','))].join('\n');
    
      // Send data to OSF via DataPipe
      console.log('Saving data...');
    
      fetch('https://pipe.jspsych.org/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*'
        },
        body: JSON.stringify({
          experimentID: 'VaAcwcVxyWdW', // <-- UPDATE WITH YOUR DATAPIPE EXPERIMENT ID
          filename: filename,
          data: data
        })
      })
        .then(response => response.json())
        .then(respData => {
          console.log('DataPipe response:', respData);
          quitPsychoJS();
        })
        .catch(err => {
          console.error('Error saving data:', err);
          // Still end the experiment to avoid hanging
          quitPsychoJS();
        });
    }
    
    psychoJS.experiment.addData('datapipe.started', globalClock.getTime());
    datapipeMaxDuration = null
    // keep track of which components have finished
    datapipeComponents = [];
    datapipeComponents.push(text);
    
    datapipeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function datapipeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'datapipe' ---
    // get current time
    t = datapipeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    datapipeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function datapipeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'datapipe' ---
    datapipeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('datapipe.stopped', globalClock.getTime());
    // the Routine "datapipe" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
