interface IMailconfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',
  defaults: {
    from: {
      email: 'contato@gusdeveloper.com.br',
      name: 'Gustavo do Pillar',
    },
  },
} as IMailconfig;
