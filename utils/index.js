import inMemoryDatabase from '../in-memory-data.json';

export const getUserStartUpPhases = (userId) => {
  const userStartUp = inMemoryDatabase.startUps.find(
    (startUp) => startUp.userId === userId
  );

  if (!userStartUp) {
    return;
  }

  return userStartUp.phases;
};

export const updatePhaseTask = (userId, phaseId, taskId, isChecked) => {
  const startUpPhases = getUserStartUpPhases(userId);

  const phase = startUpPhases?.find((p) => p.id === phaseId);

  if (!phase) {
    return;
  }

  const taskIndex = phase.tasks.findIndex((task) => task.id === taskId);

  if (taskIndex !== -1) {
    // update phase task
    phase.tasks[taskIndex].isChecked = isChecked;

    // update phase by checking the number of tasks not completed is zero
    const phaseTasksNotChecked = phase.tasks.filter(
      (task) => !task.isChecked
    ).length;

    const isCompleted = phaseTasksNotChecked === 0;

    phase.isCompleted = isCompleted;

    const updatedPhase = {
      id: phase.id,
      isCompleted,
      task: phase.tasks[taskIndex],
    };

    return updatedPhase;
  }
};
