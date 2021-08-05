import React from 'react';
import { Dialog, DialogContent, DialogTitle, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    dialogWrapper : {
        padding : theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },

    dialogTitle: {
        paddingRight: '0px'
    }
}))

export default function PopupModal(props: { title: any; children: any; openPopup: any; setOpenPopup: any; }) {
    const {title, children, openPopup, setOpenPopup } = props;
    const classes = useStyles();
    return (
        <Dialog open={openPopup} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
            <DialogTitle className={classes.dialogTitle}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    <button style={{ background:"#e5bdbd", color: "white" , outline: "none"}}
                        onClick={() => {setOpenPopup(false)}}
                        >
                        X
                    </button>
                </div>
            </DialogTitle>
            <DialogContent dividers>
               {children}
            </DialogContent>
        </Dialog>
    )
}