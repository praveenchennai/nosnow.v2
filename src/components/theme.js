export default ({ spacing, palette }) => ({
  components:{
    MuiCardContent: {
        styleOverrides: {
            root: {
                position: 'absolute',
                top: 0
            }
        }
    }
  }
    // root: {
    //   padding: "10rem",
    //   position: "absolute",
    //   top: 0,
    //   '&.MuiNewsCard--02': {
    //     maxWidth: 304,
    //     margin: 'auto',
    //     position: 'relative',
    //     transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
    //     boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
    //     borderRadius: 0,
    //     '&:hover': {
    //       '& .MuiTypography--explore': {
    //         transform: 'scale(1.2)',
    //       },
    //     },
    //     '& button': {
    //       marginLeft: 0,
    //     },
    //     '& .MuiCardMedia-root': {
    //       height: '100%',
    //     },
    //     '& .MuiCardContent-root': {
    //       position: 'absolute',
    //       top: 100,
    //       padding: spacing(3),
    //       color: palette.common.white,
    //       textAlign: 'center',
    //       '& .MuiTypography--subheading': {
    //         lineHeight: 1.8,
    //         letterSpacing: 0.5,
    //         marginBottom: '40%',
    //       },
    //       '& .MuiTypography--explore': {
    //         marginBottom: 16,
    //         transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
    //         letterSpacing: 2,
    //       },
    //     },
    //   },
    // },
  //},
});