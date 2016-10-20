import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Counter from './Counter';
import TextEditor from "./TextEditor";
import NavPanel from "./NavPanel";

storiesOf('Counter', module)
    .add('Default', () => (
        <Counter />
    ))
    .add("With starting value", () => (
        <Counter start={5} />
    ));

storiesOf("TextEditor", module)
    .add("Default - no props", () => (
        <div style={{
            width: "50%",
            margin: "auto",
            marginTop: "50px"
        }}>
            <TextEditor rows="20"/>
        </div>
    ))
    .add("View mode - disallow edit", () => (
        <div style={{
            width: "50%",
            margin: "auto",
            marginTop: "50px"
        }}>
            <TextEditor
                mode={TextEditor.mode.VIEW}
                allowEdit={false}
                content="Hello **darkness**, my old friend. I've come to *talk* with you again"/>
        </div>
    ))
    .add("View mode - allow edit", () => (
        <div style={{
            width: "50%",
            margin: "auto",
            marginTop: "50px"
        }}>
            <TextEditor
                mode={TextEditor.mode.VIEW}
                allowEdit={true}
                content="Hello **darkness**, my old friend. I've come to *talk* with you again"/>
        </div>
    ))
    .add("Edit mode", () => (
        <div style={{
            width: "50%",
            margin: "auto",
            marginTop: "50px"
        }}>
            <TextEditor
                mode={TextEditor.mode.EDIT}
                content="Hello **darkness**, my old friend. I've come to *talk* with you again"/>
        </div>
    ));

storiesOf("NavPanel", module)
    .add("Default", () => {
        let items = [
            {name: "Item 1"},
            {name: "Item 2"},
            {name: "Item 3"},
            {name: "Item 4"}
        ];
        return <NavPanel items={items} />
    });
