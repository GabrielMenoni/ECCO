import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { BsStarFill } from 'react-icons/bs'
import Rating from '@mui/material/Rating'

// Define custom styled components for the filled and unfilled stars
const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: 'yellow',
  },
  '& .MuiRating-iconHover': {
    color: 'yellow',
  },
})

// Define a custom icon container component with margin
const CustomIconContainer = styled('span')({
  margin: '0 1px', // Add a 1px gap between icons
})

export function StarRating() {
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <StyledRating
        name="customized-color"
        defaultValue={2}
        precision={1}
        icon={
          <CustomIconContainer>
            <BsStarFill fontSize="4rem" />
          </CustomIconContainer>
        }
        emptyIcon={
          <CustomIconContainer>
            <BsStarFill fontSize="4rem" color="#252E24" />
          </CustomIconContainer>
        }
      />
    </Box>
  )
}
