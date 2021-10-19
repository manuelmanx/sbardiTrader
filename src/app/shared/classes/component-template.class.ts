import { EventEmitter } from "@angular/core";

export abstract class $ComponentTemplateClass {
    public abstract title;
    public abstract value;
    public abstract type;
    public abstract id;
    public abstract color;
    public abstract onComponentEvent: EventEmitter<$ComponentEventType>;
    public abstract emitComponentEvent(): void;
}

export type $ComponentEventType = {
    eventName: string;
    eventData: any;
}