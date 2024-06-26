'use client';
import { CloudUpload as CloudUploadIcon } from '@mui/icons-material';
import { Box, Button, Input, SvgIconProps, SxProps, Tooltip } from '@mui/material';
import { ReactElement } from 'react';

interface IFileUploadButton {
  name: string;
  label?: string;
  accept?: string;
  sx?: SxProps;
  icon?: ReactElement<SvgIconProps>;
  variant?: 'contained' | 'text';
  onFileUpload: (file: File) => void;
}

const CustomFileUploader = ({
  name,
  label,
  accept,
  sx,
  icon,
  variant = 'contained',
  onFileUpload,
}: IFileUploadButton) => {
  return (
    <Box>
      <Tooltip title={label ? label : 'Upload File'}>
        <Button
          component='label'
          role={undefined}
          variant={variant}
          color='info'
          fullWidth
          tabIndex={-1}
          // startIcon={icon ? icon : <CloudUploadIcon />}
          sx={{ ...sx }}
        >
          <CloudUploadIcon />
          <Input
            type='file'
            inputProps={{ accept: accept }}
            style={{ display: 'none' }}
            onChange={(e) => {
              const fileInput = e.target as HTMLInputElement;
              const file = fileInput.files?.[0];
              if (file) {
                onFileUpload(file);
              }
            }}
          />
        </Button>
      </Tooltip>
    </Box>
  );
};

export default CustomFileUploader;
