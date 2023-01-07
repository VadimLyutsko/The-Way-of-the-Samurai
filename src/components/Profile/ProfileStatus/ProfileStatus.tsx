import React from 'react';
import styles from './ProfileStatus.module.css';

type ProfileStatusPropsType = {
    updateUserStatus: (status: string) => void
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
    };


    onEditMode = () => {
        this.setState({
            editMode: true
        });
    };

    offEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.state.status);
    };

    onStatusChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        });
    };

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.state.status
            });
        }
    }


    render() {
        return (
            <div className={styles.status}>
                {
                    !this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.onEditMode}>{this.props.status || '-----'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true}
                               onBlur={this.offEditMode}
                               type="text"
                               value={this.state.status}
                               onChange={this.onStatusChange}
                        ></input>
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;