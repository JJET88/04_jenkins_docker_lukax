CREATE TABLE devices (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  detail TEXT NOT NULL,
  coverimage VARCHAR(1000)
 
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


INSERT INTO devices (id, name, detail, coverimage) VALUES
(1, 'iPhone 15 Pro Max', 'Apple''s flagship smartphone featuring a titanium design, A17 Pro chip, advanced camera system with 5x optical zoom, and USB-C connectivity. Offers exceptional performance and photography capabilities.', 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&q=80'),
(2, 'MacBook Pro 16-inch', 'A powerful laptop with M3 Max chip, stunning Liquid Retina XDR display, up to 128GB unified memory, and exceptional battery life. Perfect for creative professionals and developers.', 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80'),
(3, 'Samsung Galaxy S24 Ultra', 'Premium Android smartphone with S Pen, 200MP camera, Snapdragon 8 Gen 3 processor, and AI-powered features. Features a stunning 6.8-inch AMOLED display and titanium frame.', 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&q=80'),
(4, 'Sony PlayStation 5', 'Next-generation gaming console with ultra-high-speed SSD, ray tracing graphics, 4K gaming support, and an extensive library of exclusive titles. Delivers immersive gaming experiences.', 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&q=80'),
(5, 'iPad Pro 12.9-inch', 'Professional tablet with M2 chip, Liquid Retina XDR display, support for Apple Pencil and Magic Keyboard. Ideal for digital artists, note-taking, and productivity on the go.', 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80'),
(6, 'AirPods Pro (2nd Gen)', 'Premium wireless earbuds with active noise cancellation, adaptive transparency mode, spatial audio, and up to 6 hours of listening time. Features H2 chip for enhanced audio quality.', 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=800&q=80'),
(7, 'Apple Watch Series 9', 'Advanced smartwatch with health monitoring features including ECG, blood oxygen, sleep tracking, and fitness tracking. Features a bright always-on Retina display and double-tap gesture control.', 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&q=80'),
(8, 'DJI Mavic 3 Pro', 'Professional drone with triple-camera system, 4/3 CMOS sensor, 43-minute flight time, and omnidirectional obstacle sensing. Captures stunning 5.1K video and 20MP photos.', 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80'),
(9, 'Sony WH-1000XM5', 'Industry-leading wireless noise-canceling headphones with exceptional audio quality, 30-hour battery life, and AI-powered noise cancellation. Perfect for travelers and audiophiles.', 'https://images.unsplash.com/photo-1545127398-14699f92334b?w=800&q=80'),
(10, 'Nintendo Switch OLED', 'Versatile gaming console with vibrant 7-inch OLED screen, enhanced audio, and the ability to play both handheld and on TV. Access to a vast library of Nintendo exclusive games.', 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=800&q=80');

