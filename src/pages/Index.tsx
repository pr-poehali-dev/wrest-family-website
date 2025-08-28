import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const trainers = [
    {
      name: 'Александр Волков',
      experience: '15 лет',
      specialty: 'Вольная борьба',
      achievements: 'МС по борьбе, тренер высшей категории',
      image: '/img/b09ff8cb-bd04-4030-871c-9a689ee884f9.jpg'
    },
    {
      name: 'Дмитрий Иванов',
      experience: '12 лет',
      specialty: 'Греко-римская борьба',
      achievements: 'КМС, чемпион региона',
      image: '/img/b09ff8cb-bd04-4030-871c-9a689ee884f9.jpg'
    },
    {
      name: 'Сергей Петров',
      experience: '10 лет',
      specialty: 'Детский тренер',
      achievements: 'КМС, работа с детьми от 6 лет',
      image: '/img/b09ff8cb-bd04-4030-871c-9a689ee884f9.jpg'
    }
  ];

  const schedule = [
    { day: 'Понедельник', kids: '17:00 - 18:00', adults: '18:30 - 20:00' },
    { day: 'Вторник', kids: '17:00 - 18:00', adults: '18:30 - 20:00' },
    { day: 'Среда', kids: '17:00 - 18:00', adults: '18:30 - 20:00' },
    { day: 'Четверг', kids: '17:00 - 18:00', adults: '18:30 - 20:00' },
    { day: 'Пятница', kids: '17:00 - 18:00', adults: '18:30 - 20:00' },
    { day: 'Суббота', kids: '10:00 - 11:30', adults: '12:00 - 14:00' }
  ];

  const achievements = [
    { title: 'Чемпионат России', year: '2024', count: '3 медали' },
    { title: 'Первенство области', year: '2024', count: '8 медалей' },
    { title: 'Кубок города', year: '2023', count: '12 медалей' },
    { title: 'Турнир памяти', year: '2023', count: '6 медалей' }
  ];

  const galleryImages = [
    '/img/99407435-1fda-4e99-868f-c91237f9c041.jpg',
    '/img/15b9fd54-bcb9-45fa-8e94-44bec123cf63.jpg',
    '/img/b09ff8cb-bd04-4030-871c-9a689ee884f9.jpg',
    '/img/99407435-1fda-4e99-868f-c91237f9c041.jpg'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                <Icon name="Zap" className="text-white" size={20} />
              </div>
              <h1 className="text-2xl font-display font-bold text-wrest-dark">WREST FAMILY</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-wrest-gray hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('schedule')} className="text-wrest-gray hover:text-primary transition-colors">Расписание</button>
              <button onClick={() => scrollToSection('trainers')} className="text-wrest-gray hover:text-primary transition-colors">Тренеры</button>
              <button onClick={() => scrollToSection('achievements')} className="text-wrest-gray hover:text-primary transition-colors">Достижения</button>
              <button onClick={() => scrollToSection('training')} className="text-wrest-gray hover:text-primary transition-colors">Тренировки</button>
              <button onClick={() => scrollToSection('contacts')} className="text-wrest-gray hover:text-primary transition-colors">Контакты</button>
            </nav>
            <Button className="hidden md:inline-flex">Записаться</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-wrest-dark via-gray-800 to-wrest-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 animate-fade-in">
              WREST<span className="text-primary">FAMILY</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">
              Профессиональный борцовский клуб для всех возрастов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
                <Icon name="Users" className="mr-2" size={20} />
                Начать тренировки
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-wrest-dark px-8 py-4 text-lg">
                <Icon name="Calendar" className="mr-2" size={20} />
                Посмотреть расписание
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display font-bold text-wrest-dark mb-4">О нашем клубе</h2>
              <p className="text-lg text-wrest-gray max-w-2xl mx-auto">
                Wrest Family — это современный борцовский клуб, где каждый найдет свой путь к победе
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Trophy" className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Профессионализм</h3>
                <p className="text-wrest-gray">Опытные тренеры с многолетним стажем</p>
              </div>
              <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Heart" className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Семейная атмосфера</h3>
                <p className="text-wrest-gray">Дружелюбная среда для всей семьи</p>
              </div>
              <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Target" className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Результат</h3>
                <p className="text-wrest-gray">Достижение спортивных целей</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-wrest-dark mb-4">Наши тренеры</h2>
            <p className="text-lg text-wrest-gray">Опытные наставники, которые помогут достичь ваших целей</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {trainers.map((trainer, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-display">{trainer.name}</CardTitle>
                  <CardDescription>
                    <Badge variant="secondary" className="mb-2">{trainer.specialty}</Badge>
                    <p>Опыт: {trainer.experience}</p>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-wrest-gray">{trainer.achievements}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-wrest-dark mb-4">Расписание</h2>
            <p className="text-lg text-wrest-gray">Выберите удобное время для тренировок</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {schedule.map((item, index) => (
                <Card key={index} className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="font-semibold text-lg mb-2 md:mb-0">{item.day}</div>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex items-center gap-2">
                        <Icon name="Baby" size={16} className="text-secondary" />
                        <span className="text-sm">Дети: {item.kids}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="User" size={16} className="text-primary" />
                        <span className="text-sm">Взрослые: {item.adults}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-wrest-dark mb-4">Достижения</h2>
            <p className="text-lg text-wrest-gray">Наши спортсмены регулярно завоевывают награды</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Medal" className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{achievement.title}</h3>
                <p className="text-sm text-wrest-gray mb-1">{achievement.year}</p>
                <p className="font-semibold text-primary">{achievement.count}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Types Section */}
      <section id="training" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-wrest-dark mb-4">Виды тренировок</h2>
            <p className="text-lg text-wrest-gray">Разнообразные программы для всех уровней подготовки</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                  <Icon name="Users" className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-semibold">Групповые тренировки</h3>
              </div>
              <p className="text-wrest-gray mb-4">Занятия в группе до 12 человек с индивидуальным подходом</p>
              <Badge variant="secondary">от 3000₽/мес</Badge>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mr-4">
                  <Icon name="User" className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-semibold">Индивидуальные</h3>
              </div>
              <p className="text-wrest-gray mb-4">Персональные тренировки с опытным тренером</p>
              <Badge variant="secondary">от 2000₽/занятие</Badge>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                  <Icon name="Baby" className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-semibold">Детские группы</h3>
              </div>
              <p className="text-wrest-gray mb-4">Специальные программы для детей от 6 до 16 лет</p>
              <Badge variant="secondary">от 2500₽/мес</Badge>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-wrest-dark mb-4">Фотогалерея</h2>
            <p className="text-lg text-wrest-gray">Моменты с тренировок и соревнований</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg hover:shadow-lg transition-shadow">
                <img 
                  src={image} 
                  alt={`Фото ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-wrest-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">Контакты</h2>
            <p className="text-lg text-gray-300">Свяжитесь с нами для записи на тренировку</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="MapPin" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Адрес</h3>
              <p className="text-gray-300">ул. Спортивная, 15<br />г. Москва</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="Phone" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p className="text-gray-300">+7 (999) 123-45-67<br />+7 (999) 987-65-43</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="Clock" className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Режим работы</h3>
              <p className="text-gray-300">Пн-Пт: 16:00 - 21:00<br />Сб-Вс: 10:00 - 16:00</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Записаться на тренировку
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
              <Icon name="Zap" className="text-white" size={16} />
            </div>
            <h3 className="text-xl font-display font-bold">WREST FAMILY</h3>
          </div>
          <p className="text-gray-400">© 2024 Wrest Family. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;