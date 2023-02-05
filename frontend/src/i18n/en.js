const en = {
  common: {
    or: 'atau',
    cancel: 'Batal',
    reset: 'Reset',
    save: 'Simpan',
    search: 'Cari',
    edit: 'Ubah',
    remove: 'Hapus',
    new: 'Baru',
    export: 'Export ke Excel',
    noDataToExport: 'Tidak ada data untuk di export',
    import: 'Import',
    discard: 'Batal',
    yes: 'Iya',
    no: 'Tidak',
    pause: 'Pause',
    areYouSure: 'Apa anda yakin?',
    view: 'Lihat',
    destroy: 'Hapus',
    mustSelectARow: 'Harus pilih Baris',
    confirm: 'Konfirmasi',
  },

  app: {
    title: 'PERPUSTAKAAN',
  },

  entities: {
    loan: {
      name: 'Pinjam',
      label: 'Pinjaman',
      menu: 'Pinjaman',
      exporterFileName: 'export pinjam ',
      list: {
        menu: 'Pinjaman',
        title: 'Pinjaman',
      },
      create: {
        success: 'Pinjaman telah dibuat',
      },
      update: {
        success: 'Pinjaman telah disimpan ',
      },
      destroy: {
        success: 'Pinjaman telah dihapus',
      },
      destroyAll: {
        success: 'Semua Pinjaman telah dihapus',
      },
      edit: {
        title: 'Ubah Pinjaman',
      },
      fields: {
        id: 'Id',
        'book': 'buku',
        'member': 'Anggota',
        'issueDateRange': 'Tanggal Penerbitan',
        'issueDate': 'Tanggal Penerbitan',
        'dueDateRange': 'Tanggal jatuh tempo',
        'dueDate': 'Tanggal jatuh tempo',
        'returnDateRange': 'Tanggal Pengembalian',
        'returnDate': 'Tanggal Pengembalian',
        'status': 'Status',
        createdAt: 'Dibuat pada',
        updatedAt: 'Diperbarui',
        createdAtRange: 'Dibuat pada',
      },
      enumerators: {
        'status': {
          'inProgress': 'Dalam proses',
          'overdue': 'Terlambat',
          'closed': 'Ditutup',
        },
      },
      new: {
        title: 'Pinjaman Baru',
      },
      view: {
        title: 'Lihat Pinjaman',
      },
      importer: {
        title: 'Import Pinjaman',
        fileName: 'loan_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    book: {
      name: 'buku',
      label: 'buku',
      menu: 'Buku',
      exporterFileName: 'book_export',
      list: {
        menu: 'Buku',
        title: 'Buku',
      },
      create: {
        success: 'Buku Telah dibuat',
      },
      update: {
        success: 'Buku Telah disimpan',
      },
      destroy: {
        success: 'Buku Telah dihapus',
      },
      destroyAll: {
        success: 'Semua Pinjaman telah dihapus',
      },
      edit: {
        title: 'Ubah Buku',
      },
      fields: {
        id: 'Id',
        'isbn': 'ISBN',
        'title': 'Judul',
        'author': 'Penulis',
        'numberOfCopiesRange': 'Jumlah Salinan',
        'numberOfCopies': 'Jumlah Salinan',
        'stockRange': 'Stok',
        'stock': 'Stok',
        'images': 'Gambar',
        'status': 'Status',
        createdAt: 'Dibuat pada',
        updatedAt: 'Diperbarui',
        createdAtRange: 'Dibuat pada',
      },
      enumerators: {
        'status': {
          'available': 'Tersedia',
          'unavailable': 'Tidak Tersedia',
        },
      },
      new: {
        title: 'Buku baru',
      },
      view: {
        title: 'Lihat buku',
      },
      importer: {
        title: 'Impor buku',
        fileName: 'book_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
  },

  auth: {
    profile: {
      title: 'Ubah Profil',
      success: 'Profil berhasil diubah',
    },
    createAnAccount: 'Buat akun',
    rememberMe: 'Ingat saya',
    forgotPassword: 'Lupa password',
    signin: 'Masuk',
    signup: 'Daftar',
    signout: 'Keluar',
    alreadyHaveAnAccount:
      'Sudah mempunyai akun? Masuk.',
    signinWithAnotherAccount:
      'Masuk dengan akun yang lain',
    emailUnverified: {
      message: `Konfirmasi email anda di  <strong>{0}</strong> to confinue.`,
      submit: `Kirim ulang verifikasi email`,
    },
    emptyPermissions: {
      message: `Anda Belum mempunyai izin. Tunggu Admin untuk memberi izin.`,
    },
    passwordResetEmail: {
      message: 'Kirim email reset password',
      error: `Email tidak diketahui`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    emailAddressVerificationEmail: {
      error: `Email tidak diketahui`,
    },
    verificationEmailSuccess: `Verifikasi email berhasil dikirim`,
    passwordResetEmailSuccess: `Password reset email berhasil dikirim`,
    passwordResetSuccess: `Password berhasil diubah`,
    verifyEmail: {
      success: 'Email terveifikasi',
      message:
        'Mohon tunggu email anda sedang di verifikasi...',
    },
  },

  roles: {
    owner: {
      label: 'Pemilik',
      description: 'Akses Penuh',
    },
    editor: {
      label: 'Editor',
      description: 'Akses Penuh',
    },
    viewer: {
      label: 'Viewer',
      description: 'Melihat Semua Akses',
    },
    auditLogViewer: {
      label: 'Audit Log Viewer',
      description: 'Melihat Semua audit logs',
    },
    iamSecurityReviewer: {
      label: 'Security Reviewer',
      description: 'Akses Penuh Mengelola Peran Pengguna',
    },
    entityEditor: {
      label: 'Entity Editor',
      description: 'Akses Edit Semua Entitas',
    },
    entityViewer: {
      label: 'Entity Viewer',
      description: 'Melihat Akses Semua Entitas',
    },
    loanEditor: {
      label: 'Loan Editor',
      description: 'Akses Edit Pinjaman',
    },
    loanViewer: {
      label: 'Loan Viewer',
      description: 'Melihat Akses Pinjaman',
    },
    bookEditor: {
      label: 'Book Editor',
      description: 'Akses Edit Buku',
    },
    bookViewer: {
      label: 'Book Viewer',
      description: 'Melihat Akses Buku',
    },
  },

  iam: {
    title: 'Identity and Access Management',
    menu: 'IAM',
    disable: 'Disable',
    disabled: 'Disabled',
    enabled: 'Enabled',
    enable: 'Enable',
    doEnableSuccess: 'User enabled successfully',
    doDisableSuccess: 'User disabled successfully',
    doDisableAllSuccess: 'User(s) disabled successfully',
    doEnableAllSuccess: 'User(s) enabled successfully',
    doAddSuccess: 'User(s) saved successfully',
    doUpdateSuccess: 'User saved successfully',
    viewBy: 'View By',
    users: {
      name: 'users',
      label: 'Users',
      exporterFileName: 'users_export',
      doRemoveAllSelectedSuccess:
        'Permissions removed successfully',
    },
    roles: {
      label: 'Roles',
      doRemoveAllSelectedSuccess:
        'Permissions removed successfully',
    },
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'New User(s)',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint:
        'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      disablingHimself: `You can't disable yourself`,
      revokingOwnPermission: `You can't revoke your own owner permission`,
    },
  },

  user: {
    fields: {
      id: 'Id',
      authenticationUid: 'Authentication Uid',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      disabled: 'Disabled',
      phoneNumber: 'Phone Number',
      role: 'Role',
      createdAt: 'Dibuat pada',
      updatedAt: 'Diperbarui',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Dibuat pada',
      password: 'Password',
      rememberMe: 'Remember me',
    },
    enabled: 'Enabled',
    disabled: 'Disabled',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings saved successfully. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      theme: 'Theme',
    },
    colors: {
      default: 'Default',
      cyan: 'Cyan',
      'geek-blue': 'Geek Blue',
      gold: 'Gold',
      lime: 'Lime',
      magenta: 'Magenta',
      orange: 'Orange',
      'polar-green': 'Polar Green',
      purple: 'Purple',
      red: 'Red',
      volcano: 'Volcano',
      yellow: 'Yellow',
    },
  },
  home: {
    menu: 'Home',
    message: `PERPUSTAKAAN ITTS`,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min:
        '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
      invalid: '${path} must be a number',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: '${path} field must have at least ${min} items',
      max:
        '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be '{0}'.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `{0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint:
        'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
  },

  imagesViewer: {
    noImage: 'No image',
  },
};

export default en;
