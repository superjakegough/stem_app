import React from "react";
import { Link, withRouter } from "react-router-dom";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) => createStyles({
  avatar: {
    height: 200,
    width: 200,
    margin: "auto",
    marginBottom: theme.spacing(4)
  },
  bodyText: {
    marginBottom: theme.spacing(2)
  },
  bodyHeader: {
    fontWeight: 500,
    marginBottom: theme.spacing(2)
  }
}));

const Privacy: React.FunctionComponent = props => {
  const classes = useStyles({});

  return (
    <div>
      <Grid container direction="column" justify="center" alignItems="center" className="mt-48 mb-48">
        <Grid item sm={10} xs={12} >
          <h2 className="content-title text-center mb-24">Privacy Notice</h2>
          <Typography className={classes.bodyText}>
            Stem Skills &amp; Recruitment Ltd (Company number 11987221) (“we”, “us” or “our) is a recruitment business which provides work-finding services to its clients and work-seekers. Stem Skills &amp; Recruitment Ltd must process personal data (including sensitive personal data) so that it can provide these services – in doing so, we act as a data controller.
          </Typography>
          <Typography className={classes.bodyText}>
            You may give your personal details to Stem Skills &amp; Recruitment Ltd directly, such as on a job application or via our website, or we may collect them from another source such as a jobs board. We must have a legal basis for processing your personal data. For the purposes of providing you with work-finding services and/or information relating to roles relevant to you we will only use your personal data in accordance with this privacy statement. At all times we will comply with current data protection laws.
          </Typography>
          <Typography className={classes.bodyHeader}>Collection and use of personal data</Typography>
          <Typography className={classes.bodyHeader}>Purpose of processing and legal basis</Typography>
          <Typography className={classes.bodyText}>
            Stem Skills &amp; Recruitment Ltd will collect your personal data (which may include sensitive personal data) and will process your personal data for the purposes of providing you with work-finding services. This includes for example, contacting you about job opportunities, assessing your suitability for those opportunities, updating our databases, putting you forward for job opportunities and developing and managing our services and relationship with you and our clients. 
          </Typography>
          <Typography>
            If you have opted-in we may also send you marketing information and news via email/ text.  You can opt-out from receiving these at any time by emailing “unsubscribe” to <a href="mailto:jack.taylor@stemrecruit.co.uk">jack.taylor@stemrecruit.co.uk.</a> when you receive these communications from us.
          </Typography>
          <Typography>
            In some cases we may be required to use your data for the purpose of investigating, reporting and detecting crime and also to comply with laws that apply to us. We may also use your information during the course of internal audits to demonstrate our compliance with certain industry standards.
          </Typography>
          <Typography>
            We must have a legal basis to process your personal data. The legal bases we rely upon to offer our work-finding services to you are:
          </Typography>
          <List>
            <ListItem><ListItemText> &bull;
              Your consent
            </ListItemText></ListItem>
            <ListItem><ListItemText> &bull;
              Where we have a legitimate interest
            </ListItemText></ListItem>
            <ListItem><ListItemText> &bull;
              To comply with a legal obligation that we have
            </ListItemText></ListItem>
            <ListItem><ListItemText> &bull;
              To fulfil a contractual obligation that we have with you
            </ListItemText></ListItem>
          </List>
          <Typography className={classes.bodyHeader}>Legitimate interest</Typography>
          <Typography className={classes.bodyText}>
            This is where Stem Skills &amp; Recruitment Ltd has a legitimate reason to process your data provided it is reasonable and does not go against what you would reasonably expect from us.  Where we have relied on a legitimate interest to process your personal data our legitimate interests is/are as follows:
          </Typography>
          <List>
            <ListItem><ListItemText> &bull;
              Managing our database and keeping work-seeker records up to date;
            </ListItemText></ListItem>
            <ListItem><ListItemText> &bull;
              Providing work-finding services to you and our clients;
            </ListItemText></ListItem>
            <ListItem><ListItemText> &bull;
              Contacting you to seek your consent where we need it;
            </ListItemText></ListItem>
            <ListItem><ListItemText> &bull;
              Giving you information about similar products or services that you have used from us recently;
            </ListItemText></ListItem>
          </List>
          <Typography className={classes.bodyHeader}>Statutory/contractual requirement</Typography>
          <Typography className={classes.bodyText}>
            Stem Skills &amp; Recruitment Ltd has certain legal and contractual requirements to collect personal data (e.g. to comply with the Conduct of Employment Agencies and Employment Businesses Regulations 2003, immigration and tax legislation, and in some circumstances safeguarding requirements.)  Our clients may also require this personal data, and/or we may need your data to enter into a contract with you. If you do not give us personal data we need to collect we may not be able to continue to provide work-finding services to you. 
          </Typography>
          <Typography className={classes.bodyHeader}>Recipient/s of data</Typography>
          <Typography className={classes.bodyText}>
            Stem Skills &amp; Recruitment Ltd will process your personal data and/or sensitive personal data with the following recipients:
          </Typography>
          <List>
            <ListItem><ListItemText> &bull;
              Clients (whom we may introduce or supply you to, only when your consent has been given)
            </ListItemText></ListItem>
            <ListItem><ListItemText> &bull;
              Former employers whom we may seek references from (if details are provided to us by the candidate)
            </ListItemText></ListItem>
            <ListItem><ListItemText> &bull;
              Third parties who perform functions on our behalf and who also provide services to us, such as IT technicians who provide support on our business technology systems, software solutions providers and back office support. These third parties comply with similar undertakings of privacy and confidentiality as us. Please note: These third parties will only have access to your personal data if required by them to perform their functions and they are not permitted to use any personal data for any other purposes.
            </ListItemText></ListItem>
          </List>
          <Typography className={classes.bodyHeader}>Categories of data</Typography>
          <Typography className={classes.bodyText}>
            Stem Skills &amp; Recruitment Ltd may collect the following personal data on you:
          </Typography>
          <Typography className={classes.bodyText}><i>Personal data:</i></Typography>
          <List>
            <ListItem><ListItemText> &bull;
              Full name
            </ListItemText></ListItem>
            <ListItem><ListItemText> &bull;
              Date of birth
            </ListItemText></ListItem>
            <ListItem><ListItemText> &bull;
              Contact details (including postal address, mobile no., email address)
            </ListItemText></ListItem>
            <ListItem><ListItemText> &bull;
              National insurance no.
            </ListItemText></ListItem>
            <ListItem><ListItemText> &bull;
              Identification documents (e.g. passport, driving licence, utility bill)
            </ListItemText></ListItem>
          </List>
          <Typography className={classes.bodyText}><i>We might also collect the following sensitive personal data if required for a security check or by our clients when providing you with work-finding services: </i></Typography>
          <List>
            <ListItem><ListItemText> &bull;
              Health information including whether you have a disability
            </ListItemText></ListItem>
            <ListItem><ListItemText> &bull;
              Criminal conviction
            </ListItemText></ListItem>
          </List>
          <Typography className={classes.bodyHeader}>Overseas Transfers</Typography>
          <Typography className={classes.bodyText}>
            Stem Skills &amp; Recruitment Ltd may transfer the information you provide to us to countries outside the European Economic Area (‘EEA’) for the purposes of providing you with work-finding services. We will take steps to ensure adequate protections are in place to ensure the security of your information. The EEA comprises the EU member states plus Norway, Iceland and Liechtenstein. 
          </Typography>
          <Typography className={classes.bodyHeader}>Data retention</Typography>
          <Typography className={classes.bodyText}>
            Stem Skills &amp; Recruitment Ltd will retain your personal data only for as long as is necessary for the purpose we collect it. Different laws may also require us to keep different data for different periods of time. For example, the Conduct of Employment Agencies and Employment Businesses Regulations 2003, require us to keep work-seeker records for at least one year from (a) the date of their creation or (b) after the date on which we last provide you with work-finding services.
          </Typography>
          <Typography className={classes.bodyText}>
            Where we have obtained your consent to process your personal data, we will do so in line with our retention policy. Upon expiry of that period we will seek further consent from you. Where consent is not granted we will cease to process your personal data. 
          </Typography>
          <Typography className={classes.bodyHeader}>Your rights</Typography>
          <Typography className={classes.bodyText}>
            Please be aware that you have the following data protection rights:
          </Typography>
          <List>
            <ListItem><ListItemText> &bull;
              The right to be informed about the personal data we process on you;
            </ListItemText></ListItem>
            <ListItem><ListItemText> &bull;
              The right of access to the personal data we process on you;
            </ListItemText></ListItem>
            <ListItem><ListItemText> &bull;
              The right to rectification of your personal data;
            </ListItemText></ListItem>
            <ListItem><ListItemText> &bull;
              The right to erasure of your personal data in certain circumstances;
            </ListItemText></ListItem>
            <ListItem><ListItemText> &bull;
              The right to restrict processing of your personal data;
            </ListItemText></ListItem>
            <ListItem><ListItemText> &bull;
              The right to data portability in certain circumstances;
            </ListItemText></ListItem>
            <ListItem><ListItemText> &bull;
              The right to object to the processing of your personal data that was based on a public or legitimate interest;
            </ListItemText></ListItem>
            <ListItem><ListItemText> &bull;
              The right not to be subjected to automated decision making and profiling; and
            </ListItemText></ListItem>
            <ListItem><ListItemText> &bull;
              The right to withdraw consent at any time.
            </ListItemText></ListItem>
          </List>
          <Typography className={classes.bodyText}>
            Where you have consented to Stem Skills &amp; Recruitment Ltd processing your personal data you have the right to withdraw that consent at any time by contacting Jack Taylor (Director &amp; Data Protection Officer at the Company) on  <a href="mailto:jack.taylor@stemrecruit.co.uk">jack.taylor@stemrecruit.co.uk.</a> Please note that if you withdraw your consent to further processing that does not affect any processing done prior to the withdrawal of that consent, or which is done according to another legal basis.
          </Typography>
          <Typography className={classes.bodyText}>
            There may be circumstances where Stem Skills &amp; Recruitment Ltd will still need to process your data for legal or official reasons. Where this is the case, we will tell you and we will restrict the data to only what is necessary for those specific reasons.
          </Typography>
          <Typography className={classes.bodyText}>
            If you believe that any of your data that Stem Skills &amp; Recruitment Ltd processes is incorrect or incomplete, please contact us using the details above and we will take reasonable steps to check its accuracy and correct it where necessary.
          </Typography>
          <Typography className={classes.bodyText}><strong>
            You can also contact us using the above details if you want us to restrict the type or amount of data we process for you, access your personal data or exercise any of the other rights listed above.
          </strong></Typography>
          <Typography className={classes.bodyHeader}>Links to external websites</Typography>
          <Typography className={classes.bodyText}>
            Our website may contain links to other external websites. Please be aware that Stem Skills &amp; Recruitment Ltd is not responsible for the privacy practices of such other sites. When you leave our site we encourage you to read the privacy statements of each and every website that collects personally identifiable information. This privacy statement applies solely to information collected by our website.
          </Typography>
          <Typography className={classes.bodyHeader}>Sale of business</Typography>
          <Typography className={classes.bodyText}>
            If Stem Skills &amp; Recruitment Ltd business is sold or integrated with another business your details may be disclosed to our advisers and any prospective purchasers and their advisers and will be passed on to the new owners of the business.
          </Typography>
          <Typography className={classes.bodyHeader}>Data Security</Typography>
          <Typography className={classes.bodyText}>
            Stem Skills &amp; Recruitment Ltd takes every precaution to protect our users’ information. Only employees who need the information to perform a specific job are granted access to your information.
          </Typography>
          <Typography className={classes.bodyText}>
            Stem Skills &amp; Recruitment Ltd uses all reasonable efforts to safeguard your personal information. However, you should be aware that the use of email/ the Internet is not entirely secure and for this reason we cannot guarantee the security or integrity of any personal information which is transferred from you or to you via email/ the Internet.
          </Typography>
          <Typography className={classes.bodyText}>
            If you share a device with others we recommend that you do not select the “remember my details” function when that option is offered. 
          </Typography>
          <Typography className={classes.bodyText}><strong>
            If you have any questions about the security at our website, you can email Jack Taylor at <a href="mailto:jack.taylor@stemrecruit.co.uk">jack.taylor@stemrecruit.co.uk.</a>
          </strong></Typography>
          <Typography className={classes.bodyHeader}>Changes to this privacy statement</Typography>
          <Typography className={classes.bodyText}>
            We will update this privacy statement from time to time.  We will post any changes on the statement with revision dates.  If we make any material changes, we will notify you.
          </Typography>
          <Typography className={classes.bodyHeader}>Complaints or queries</Typography>
          <Typography className={classes.bodyText}>
            If you wish to complain about this privacy notice or any of the procedures set out in it please contact: Jack Taylor at <a href="mailto:jack.taylor@stemrecruit.co.uk">jack.taylor@stemrecruit.co.uk.</a>
          </Typography>
          <Typography className={classes.bodyText}>
            You also have the right to raise concerns with Information Commissioner’s Office on 0303 123 1113 or at https://ico.org.uk/concerns/, or any other relevant supervisory authority should your personal data be processed outside of the UK, if you believe that your data protection rights have not been adhered to.
          </Typography>
        </Grid>
        <Grid item>
          <Grid container justify="center" className="mb-24">
            <Button color="primary" component={Link} to="/">Home</Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(Privacy);
