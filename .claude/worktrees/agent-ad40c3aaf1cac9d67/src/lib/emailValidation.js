// Domínios corporativos autorizados
export const AUTHORIZED_DOMAINS = [
  'montreal.com.br',
  'pcservice.com.br',
  'petrobras.com.br'
];

export const isAuthorizedEmail = (email) => {
  if (!email || typeof email !== 'string') return false;

  const domain = email.split('@')[1]?.toLowerCase();
  return AUTHORIZED_DOMAINS.includes(domain);
};

export const getEmailDomain = (email) => {
  return email.split('@')[1]?.toLowerCase() || '';
};

export const getDomainList = () => {
  return AUTHORIZED_DOMAINS.join(', ');
};
