import Avatar from '@mui/material/Avatar';
import { AvatarProps } from '@mui/material';

export default function CustomAvatar(props:AvatarProps) {
    return (
        <Avatar alt={props.alt} src={props.src} data-testid="avatar"/>
    )
}
