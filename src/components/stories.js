import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import "../../public/global.css";
import App from "./App";
import TextEditor from "./TextEditor";
import NavPanel from "./NavPanel";
import NavPanelItem from "./NavPanelItem"

storiesOf("App", module)
    .add("No data", () => (
        <App />
    ))

storiesOf("TextEditor", module)
    .addDecorator((story) => (
        <div style={{
            width: "50%",
            margin: "auto",
            marginTop: "50px",
            height: "1000px",
            backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/000/104/103/original/retro-background-pattern-vector.jpg')"
        }}>
            {story()}
        </div>
    ))
    .add("Default - no props", () => (
        <TextEditor rows="20"/>
    ))
    .add("View mode - disallow edit", () => (
        <TextEditor
            mode={TextEditor.mode.VIEW}
            allowEdit={false}
            content="Hello **darkness**, my old friend. I've come to *talk* with you again"/>
    ))
    .add("View mode - allow edit", () => (
        <TextEditor
            mode={TextEditor.mode.VIEW}
            allowEdit={true}
            content="Hello **darkness**, my old friend. I've come to *talk* with you again"/>
    ))
    .add("Edit mode", () => (
        <TextEditor
            mode={TextEditor.mode.EDIT}
            content="Hello **darkness**, my old friend. I've come to *talk* with you again"/>
    ));

storiesOf("NavPanel", module)
    .addDecorator((story) => (
        <div style={{
            width: "50%",
            margin: "auto",
            marginTop: "50px",
            height: "1000px",
            backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/000/104/103/original/retro-background-pattern-vector.jpg')"
        }}>
            {story()}
        </div>
    ))
    .add("Default", () => {
        let items = getPanelItems();
        return (
            <NavPanel items={items} />
        );
    })
    .add("Item with round image", () => (
        <NavPanelItem title="Mon item 1" text="updated yesterday" img="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-check-icon.png"/>
    ))
    .add("Item with square image", () => (
        <NavPanelItem title="Mon item 1" text="updated yesterday" img="http://thumb1.shutterstock.com/display_pic_with_logo/3759446/419286670/stock-vector-square-emoticons-avatars-and-icons-419286670.jpg"/>
    ))
    .add("Item without image", () => (
        <NavPanelItem title="Mon item 1" text="updated yesterday" />
    ));

function getPanelItems() {
    return [
        {key: "item1", title: "Item 1", text: "updated last year", img: "http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-check-icon.png"},
        {key: "item2", title: "Item 2", img: "http://thumb1.shutterstock.com/display_pic_with_logo/3759446/419286670/stock-vector-square-emoticons-avatars-and-icons-419286670.jpg"},
        {key: "item3", title: "Item 3", text: "Other items", separator: true},
        {key: "item4", title: "Item 4", onClick: action("Clicked")}
    ];
}
