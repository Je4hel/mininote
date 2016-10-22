import React, {Component} from "react";
import Remarkable from "remarkable";
import "../resources/TextEditor.css";
import "../resources/vendor/font-awesome.min.css";

class TextEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: this.props.mode,
            content: this.props.content
        }
    }

    /** Mode of the editor */
    static get mode() {
        return {
            VIEW: "view",
            EDIT: "edit"
        };
    }

    /** Updates state.content with the value of the event's target */
    updateEditorContent (event) {
        this.setState({
            content: event.target.value
        });
    }

    /** Switches from edit to view mode and vice versa */
    switchEditorMode (event) {
        if (this.props.allowEdit) {
            this.setState({
               mode: this.state.mode === TextEditor.mode.EDIT ? TextEditor.mode.VIEW : TextEditor.mode.EDIT
           });
        }
    }

    /** Returns HTML markup from the given markdown string */
    getHTMLFromMarkdown (md) {
        let remarkable = new Remarkable();
        let rawMarkup = remarkable.render(md);

        return {__html: rawMarkup};
    }

    render () {
        let editorContent = null;
        let toolbar = null;
        if (this.state.mode === TextEditor.mode.EDIT) {
            toolbar =
                <ul className="editor-toolbar">
                    <li className="editor-toolbar-dropdown">
                        <select id="editorTextStyle">
                            <option value="h1">Heading 1</option>
                            <option value="h2">Heading 2</option>
                            <option value="h3">Heading 3</option>
                            <option value="p">Paragraph</option>
                            <option value="blockquote">Quote</option>
                            <option value="code">Code block</option>
                        </select>
                    </li>
                    <li className="editor-toolbar-button">
                        <i className="fa fa-fw fa-italic" aria-hidden="true"></i>
                    </li>
                    <li className="editor-toolbar-button">
                        <i className="fa fa-fw fa-bold" aria-hidden="true"></i><
                    /li>
                    <li className="editor-toolbar-button">
                        <i className="fa fa-fw fa-list-ul" aria-hidden="true"></i>
                    </li>
                    <li className="editor-toolbar-button">
                        <i className="fa fa-fw fa-list-ol" aria-hidden="true"></i>
                    </li>
                    <li className="editor-toolbar-button" onClick={(e) => this.switchEditorMode(e)}>
                        <i className="fa fa-fw fa-eye" aria-hidden="true"></i>
                    </li>
                </ul>

            editorContent =
                <textarea className="editor-field editor-field-edit" { ...this.props }
                    placeholder={this.props.placeholder} value={this.state.content}
                    onChange={(e) => this.updateEditorContent(e)} />
        } else {
            toolbar =
                <ul className="editor-toolbar">
                    <li className={"editor-toolbar-button " + (this.props.allowEdit ? "" : "hidden")}
                        onClick={(e) => this.switchEditorMode(e)}>
                        <i className="fa fa-fw fa-edit" aria-hidden="true"></i>
                    </li>
                </ul>

            editorContent =
                <div className="editor-field editor-field-view"
                    dangerouslySetInnerHTML={this.getHTMLFromMarkdown(this.state.content)} />
        }

        return (
            <div className="TextEditor">
                {toolbar}
                {editorContent}
            </div>
        );
    }
}

TextEditor.propTypes = {
    mode: React.PropTypes.string,
    allowEdit: React.PropTypes.bool,
    content: React.PropTypes.string,
    placeholder: React.PropTypes.string
}

TextEditor.defaultProps = {
    mode: TextEditor.mode.EDIT,
    allowEdit: true,
    content: "",
    placeholder: "This multiline field supports extended **Markdown** notation."
}

export default TextEditor;
