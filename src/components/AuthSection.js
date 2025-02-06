import { useNavigate } from 'react-router-dom';

function AuthSection() {
  const navigate = useNavigate();

  return (
    <section className="auth">
      <h2>Login or Register</h2>
      <button onClick={() => navigate('/login')}>Login</button>
      <button onClick={() => navigate('/signup')}>Register</button>
    </section>
  );
}

export default AuthSection;
