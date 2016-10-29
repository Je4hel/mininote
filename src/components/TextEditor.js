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

    /** Switches the editor to the specified mode */
    switchToEditorMode (mode) {
        if (this.props.allowEdit && mode !== this.state.mode) {
            this.setState({
               mode: this.state.mode = mode
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
        if (this.state.mode === TextEditor.mode.EDIT) {
            editorContent =
                <textarea { ...this.props } className="editor-field editor-field-edit"
                    autoFocus={true} value={this.state.content} placeholder={this.props.placeholder}
                    onChange={(e) => this.updateEditorContent(e)}
                    onFocus={(e) => this.switchToEditorMode(TextEditor.mode.EDIT)}
                    onClick={(e) => this.switchToEditorMode(TextEditor.mode.EDIT)}
                    onBlur={(e) => this.switchToEditorMode(TextEditor.mode.VIEW)} />
        } else {
            editorContent =
                <div className="editor-field editor-field-view"
                    dangerouslySetInnerHTML={this.getHTMLFromMarkdown(this.state.content)}
                    onFocus={(e) => this.switchToEditorMode(TextEditor.mode.EDIT)}
                    onClick={(e) => this.switchToEditorMode(TextEditor.mode.EDIT)}
                    onBlur={(e) => this.switchToEditorMode(TextEditor.mode.VIEW)}  />
        }

        return (
            <div className="TextEditor">
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
