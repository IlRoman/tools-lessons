import "core-js";
import { createTask } from './list/createTasks.js';
import { renderListItems } from './list/renderListItems.js';
import { onStorageChange, onDocumentLoaded } from './list/onStorageChange.js';
import { onToggleTask } from './list/onToggleTask.js';
import { deleteEvent } from './list/deleteTask.js';
import './index.scss';