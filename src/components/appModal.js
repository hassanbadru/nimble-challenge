import React from "react";
import { Grid, Dialog } from '@material-ui/core'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import {colorMapping} from '../utils/enums'


const ApplicationModal = props => {

    let { view_application, closeAppModal } = props

    var status_color = (view_application) ? colorMapping[String(view_application.new_status.color)] : colorMapping["2"]

    return (
        <Dialog fullWidth open={(view_application) ? true : false} onClose={() => closeAppModal()}>
          {
              (view_application) ? ( <Grid style={{margin: '2%'}}>
              <Grid><b>ID:</b> {view_application.id}</Grid>
              <Grid><b>Role ID:</b> {view_application.role.id}</Grid>
              <Grid><b>Role Title:</b> {view_application.role.title}</Grid>
              <Grid><b>Jobboard Title:</b> {view_application.role.jobboard_title}</Grid>
              <Grid><b>Status:</b>  &nbsp; <FiberManualRecordIcon style={{color: status_color, fontSize: 10}} /> &nbsp; {view_application.new_status.label}</Grid>
              </Grid> ) : null
          }
        </Dialog>
    )
}


export default ApplicationModal;
