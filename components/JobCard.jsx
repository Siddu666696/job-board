import React from 'react';
import { 
  Card, 
  CardContent, 
  CardActions, 
  Typography, 
  Chip, 
  Stack, 
  Box, 
  Button, 
  Avatar, 
  Divider,
  Grid,
  Container
} from '@mui/material';
import { 
  Work as WorkIcon, 
  LocationOn as LocationIcon, 
  Paid as PaidIcon, 
  Event as EventIcon, 
  Phone as PhoneIcon, 
  FactCheck as SkillIcon,
  ArrowForward as ArrowIcon
} from '@mui/icons-material';

const formatSalary = (min, max) => {
  return `$${(min / 1000).toFixed(1)}k - $${(max / 1000).toFixed(1)}k`;
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

const JobCard = ({ job }) => {
  const qualifications = typeof job.qualifications === 'string' 
    ? JSON.parse(job.qualifications) 
    : job.qualifications;

  return (
    <Container >
    <article itemScope itemType="https://schema.org/JobPosting" >
      <Card 
        variant="elevation" 
        sx={{ 
          borderRadius: 3, 
          m:2,
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          border: '1px solid #e0e0e0',
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
          }
        }}
      >
        <Box sx={{ bgcolor: '#1976d2', color: 'white', p: 2 }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar 
              variant="rounded" 
              sx={{ bgcolor: 'white', color: '#1976d2', width: 56, height: 56 }}
            >
              <WorkIcon fontSize="large" />
            </Avatar>
            <Box>
              <Typography component="h2" variant="h6" fontWeight="bold" itemProp="title" sx={{ lineHeight: 1.2 }}>
                {job.title}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }} itemProp="hiringOrganization">
                {job.company}
              </Typography>
            </Box>
          </Stack>
        </Box>

        <CardContent sx={{ pb: 1 }}>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            
            <Grid item xs={12}>
              <Box 
                sx={{ 
                  bgcolor: '#e8f5e9', 
                  color: '#2e7d32', 
                  p: 1.5, 
                  borderRadius: 2, 
                  display: 'flex', 
                  alignItems: 'center',
                  gap: 1.5
                }}
              >
                <PaidIcon />
                <Box>
                  <Typography variant="caption" display="block" fontWeight="bold" textTransform="uppercase">
                    Estimated Pay
                  </Typography>
                  <Typography variant="h6" fontWeight="bold">
                    {formatSalary(job.salary_from, job.salary_to)} <Typography component="span" variant="caption">/ year</Typography>
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Stack direction="row" spacing={1} alignItems="center" color="text.secondary">
                <LocationIcon color="action" fontSize="small" />
                <Typography variant="body2" fontWeight="500">
                  {job.location.split(',')[0]} 
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6}>
               <Stack direction="row" spacing={1} alignItems="center" color="text.secondary">
                <EventIcon color="action" fontSize="small" />
                <Typography variant="body2" fontWeight="500">
                  {job.employment_type}
                </Typography>
              </Stack>
            </Grid>
          </Grid>

          <Divider sx={{ my: 1.5 }} />

          <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 2 }}>
            {job.description}
          </Typography>

          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
            <SkillIcon color="disabled" fontSize="small" />
            <Typography variant="caption" fontWeight="bold" color="text.secondary">
              REQUIREMENTS:
            </Typography>
          </Stack>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {qualifications.slice(0, 3).map((qual, index) => (
              <Chip 
                key={index} 
                label={qual} 
                size="small" 
                sx={{ bgcolor: '#f5f5f5', border: '1px solid #e0e0e0' }} 
              />
            ))}
            {qualifications.length > 3 && <Chip label={`+${qualifications.length - 3}`} size="small" />}
          </Box>
          
          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1, color: '#ed6c02' }}>
            <EventIcon fontSize="small" />
            <Typography variant="caption" fontWeight="bold">
              Apply before: {formatDate(job.application_deadline)}
            </Typography>
          </Box>

        </CardContent>

        <CardActions sx={{ p: 2, pt: 0 }}>
          <Stack direction="row" spacing={1} display={"flex"} justifyContent={"end"}>
            <Button 
              variant="outlined" 
              startIcon={<PhoneIcon />} 
              fullWidth
              href={`tel:${job.contact}`}
              sx={{ borderColor: '#1976d2', color: '#1976d2' }}
            >
              Call
            </Button>
            <Button 
              variant="contained" 
              endIcon={<ArrowIcon />} 
              fullWidth
              disableElevation
              sx={{ bgcolor: '#1976d2', fontWeight: 'bold' }}
            >
              Apply
            </Button>
          </Stack>
        </CardActions>
      </Card>
    </article>
    </Container>
  );
};

export default JobCard;