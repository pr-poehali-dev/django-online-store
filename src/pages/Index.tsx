import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const products = [
    {
      id: 1,
      name: "Стильная футболка",
      price: 2500,
      image: "img/52feff93-301a-4232-bbed-c3d5c29ce4be.jpg",
      category: "Топы",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Черный", "Белый", "Серый"],
    },
    {
      id: 2,
      name: "Джинсы премиум",
      price: 8900,
      image: "img/52feff93-301a-4232-bbed-c3d5c29ce4be.jpg",
      category: "Джинсы",
      sizes: ["28", "30", "32", "34"],
      colors: ["Синий", "Черный"],
    },
    {
      id: 3,
      name: "Кроссовки спорт",
      price: 12500,
      image: "img/52feff93-301a-4232-bbed-c3d5c29ce4be.jpg",
      category: "Обувь",
      sizes: ["40", "41", "42", "43"],
      colors: ["Белый", "Черный", "Серый"],
    },
    {
      id: 4,
      name: "Куртка дизайнерская",
      price: 15900,
      image: "img/52feff93-301a-4232-bbed-c3d5c29ce4be.jpg",
      category: "Верхняя одежда",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Черный", "Бежевый"],
    },
    {
      id: 5,
      name: "Рубашка классик",
      price: 4200,
      image: "img/52feff93-301a-4232-bbed-c3d5c29ce4be.jpg",
      category: "Рубашки",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Белый", "Голубой", "Черный"],
    },
    {
      id: 6,
      name: "Платье casual",
      price: 6700,
      image: "img/52feff93-301a-4232-bbed-c3d5c29ce4be.jpg",
      category: "Платья",
      sizes: ["XS", "S", "M", "L"],
      colors: ["Черный", "Красный", "Синий"],
    },
  ];

  const categories = [
    "Все",
    "Топы",
    "Джинсы",
    "Обувь",
    "Верхняя одежда",
    "Рубашки",
    "Платья",
  ];
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setCartCount(cartCount + 1);
  };

  const filteredProducts =
    selectedCategory === "Все"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-black">FASHION STORE</h1>
              <nav className="hidden md:flex space-x-6">
                <a
                  href="#catalog"
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  Каталог
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  О нас
                </a>
                <a
                  href="#delivery"
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  Доставка
                </a>
                <a
                  href="#blog"
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  Блог
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  Контакты
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Heart" size={20} />
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Icon name="ShoppingCart" size={20} />
                    {cartCount > 0 && (
                      <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                        {cartCount}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Корзина</SheetTitle>
                    <SheetDescription>
                      {cartItems.length === 0
                        ? "Ваша корзина пуста"
                        : `Товаров в корзине: ${cartItems.length}`}
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-4 space-y-4">
                    {cartItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-4 p-4 border rounded-lg"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-gray-600">
                            {item.price.toLocaleString()} ₽
                          </p>
                        </div>
                      </div>
                    ))}
                    {cartItems.length > 0 && (
                      <div className="pt-4 border-t">
                        <div className="flex justify-between items-center mb-4">
                          <span className="font-medium">Итого:</span>
                          <span className="font-bold text-lg">
                            {cartItems
                              .reduce((sum, item) => sum + item.price, 0)
                              .toLocaleString()}{" "}
                            ₽
                          </span>
                        </div>
                        <Button className="w-full">Оформить заказ</Button>
                      </div>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-gray-900 to-gray-700 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="img/f24c6c3a-52cb-4510-958b-c3f9f24c10fd.jpg"
            alt="Fashion Hero"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h2 className="text-5xl font-bold mb-6 animate-fade-in">
              Новая коллекция
            </h2>
            <p className="text-xl mb-8 opacity-90 animate-fade-in">
              Откройте для себя последние тенденции моды с нашими эксклюзивными
              коллекциями
            </p>
            <div className="flex space-x-4">
              <Button size="lg" className="animate-scale-in">
                Смотреть коллекцию
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-black"
              >
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="catalog" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">
            Каталог товаров
          </h3>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="hover-scale"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover-scale animate-fade-in"
              >
                <CardHeader className="p-0">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <Button variant="ghost" size="icon" className="hover-scale">
                      <Icon name="Heart" size={18} />
                    </Button>
                  </div>
                  <CardDescription className="mb-3">
                    {product.category}
                  </CardDescription>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.sizes.slice(0, 3).map((size) => (
                      <Badge key={size} variant="secondary" className="text-xs">
                        {size}
                      </Badge>
                    ))}
                    {product.sizes.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{product.sizes.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">
                      {product.price.toLocaleString()} ₽
                    </span>
                    <Button
                      onClick={() => addToCart(product)}
                      className="hover-scale"
                    >
                      <Icon name="ShoppingCart" size={16} className="mr-2" />В
                      корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={24} className="text-blue-600" />
              </div>
              <h4 className="font-semibold mb-2">Быстрая доставка</h4>
              <p className="text-sm text-gray-600">
                Доставим в течение 1-3 дней
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} className="text-green-600" />
              </div>
              <h4 className="font-semibold mb-2">Гарантия качества</h4>
              <p className="text-sm text-gray-600">
                100% гарантия на все товары
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="RotateCcw" size={24} className="text-purple-600" />
              </div>
              <h4 className="font-semibold mb-2">Легкий возврат</h4>
              <p className="text-sm text-gray-600">30 дней на возврат</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Headphones" size={24} className="text-yellow-600" />
              </div>
              <h4 className="font-semibold mb-2">Поддержка 24/7</h4>
              <p className="text-sm text-gray-600">Всегда готовы помочь</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">О нашем магазине</h3>
              <p className="text-gray-600 mb-6">
                Мы создаем модную одежду для современных людей, которые ценят
                качество и стиль. Наша миссия - сделать моду доступной для всех,
                предлагая уникальные дизайны по доступным ценам.
              </p>
              <p className="text-gray-600 mb-6">
                Каждый предмет одежды тщательно отбирается нашими стилистами,
                чтобы обеспечить высокое качество и соответствие последним
                трендам моды.
              </p>
              <Button>Узнать больше</Button>
            </div>
            <div>
              <img
                src="img/1ef5609e-f83b-4a02-97af-879dc0127b81.jpg"
                alt="About us"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section id="delivery" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Информация</h3>
          <Tabs defaultValue="delivery" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="delivery">Доставка</TabsTrigger>
              <TabsTrigger value="payment">Оплата</TabsTrigger>
              <TabsTrigger value="returns">Возврат</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>
            <TabsContent value="delivery" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Условия доставки</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Truck" size={20} className="text-blue-600" />
                    <span>Курьерская доставка по Москве - 300 ₽</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" size={20} className="text-green-600" />
                    <span>Доставка в регионы - от 500 ₽</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" size={20} className="text-purple-600" />
                    <span>Время доставки - 1-3 рабочих дня</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Gift" size={20} className="text-yellow-600" />
                    <span>Бесплатная доставка от 5000 ₽</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="payment" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Способы оплаты</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon
                      name="CreditCard"
                      size={20}
                      className="text-blue-600"
                    />
                    <span>Банковской картой онлайн</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon
                      name="Smartphone"
                      size={20}
                      className="text-green-600"
                    />
                    <span>Через мобильные приложения</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon
                      name="Banknote"
                      size={20}
                      className="text-purple-600"
                    />
                    <span>Наличными при получении</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="returns" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Возврат и обмен</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon
                      name="RotateCcw"
                      size={20}
                      className="text-blue-600"
                    />
                    <span>30 дней на возврат товара</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon
                      name="RefreshCw"
                      size={20}
                      className="text-green-600"
                    />
                    <span>Бесплатный обмен размера</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon
                      name="CheckCircle"
                      size={20}
                      className="text-purple-600"
                    />
                    <span>Товар должен быть в оригинальном состоянии</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="faq" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Часто задаваемые вопросы</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">
                      Как узнать свой размер?
                    </h4>
                    <p className="text-gray-600">
                      Воспользуйтесь нашей таблицей размеров в описании товара.
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-2">Как отследить заказ?</h4>
                    <p className="text-gray-600">
                      Вы получите SMS с номером для отслеживания после отправки.
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-2">
                      Можно ли примерить одежду?
                    </h4>
                    <p className="text-gray-600">
                      Да, при курьерской доставке доступна примерка.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Подпишитесь на новости</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Получайте информацию о новых коллекциях, скидках и эксклюзивных
            предложениях
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <Input
              type="email"
              placeholder="Ваш email"
              className="flex-1 bg-gray-800 border-gray-700 text-white"
            />
            <Button>Подписаться</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">FASHION STORE</h4>
              <p className="text-gray-400 mb-4">
                Ваш надежный партнер в мире моды
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="icon">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="icon">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Каталог</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Новинки
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Женская одежда
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Мужская одежда
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Обувь
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Информация</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#delivery"
                    className="hover:text-white transition-colors"
                  >
                    Доставка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Оплата
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Возврат
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Размеры
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@fashion-store.ru</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Тверская, 1</span>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Fashion Store. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
