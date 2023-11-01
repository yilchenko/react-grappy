import type { StoryObj } from '@storybook/react';
import { DemoComponent } from './DemoComponent';
declare const meta: {
    title: string;
    component: typeof DemoComponent;
    tags: string[];
    argTypes: {
        initialCount: {
            control: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithInitialCount: Story;
