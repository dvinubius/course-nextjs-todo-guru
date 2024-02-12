import { Label } from "@/types/label.type";
import { Todo } from "@/types/todo.type";
import { LABELS } from "./dummy-labels";

const labelCalled = (name: string) => {
  const label = LABELS.find((l: Label) => l.name === name);
  if (!label) throw new Error('Bad dummy data');
  return label;
}

export const TODOS: Todo[] = [
  {
    id: 'todo1',
    name: 'Clean up cellar',
    description: 'Sort into things to keep / give away / throw away, clean walls & floor, put keepers back in order',
    labels: [
      labelCalled('chores')
    ]
  },
  {
    id: 'todo2',
    name: 'Deliver e-shop',
    description: 'Finish e2e tests, deploy, present to client, wrap up admin stuff',
    labels: [
      labelCalled('work'),
      labelCalled('urgent')
    ]
  },
  {
    id: 'todo3',
    name: 'Pick up K',
    description: 'Pick up from airport with enough place for luggage',
    labels: [
      labelCalled('delegate'),
      labelCalled('urgent'),
    ]
  },
  {
    id: 'todo4',
    name: 'Check invoice payments',
    description: 'Verify January invoices have been paid by Co1 and Co4, remind Co2 of bank account change',
    labels: [
      labelCalled('admin')
    ] 
  }
];