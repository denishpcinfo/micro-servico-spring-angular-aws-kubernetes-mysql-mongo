package com.d3n15tec.order.repository;

import com.d3n15tec.order.entity.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface OrderRepository extends MongoRepository<Order, Integer>{

 Page<Order> findByOrderId(Pageable pageable, Integer findByorderId);

 Page<Order> findByOrderIdAndUserEmail(Integer findByorderId, String email, Pageable pageable );

 @Query("{ 'restaurant.name' : { $regex: ?0, $options: 'i' }, 'user.email' : ?1 }")
 Page<Order> findByRestaurantNameAndUserEmail(String restaurantName, String email, Pageable pageable );

 @Query("{ 'restaurant.name' : { $regex: ?0, $options: 'i' } }")
 Page<Order> findByRestaurantName(String name, Pageable pageable);

 @Query("{ 'user.nome' : { $regex: ?0, $options: 'i' } }")
 Page<Order> findByUserDTONome(String name, Pageable pageable);

 @Query("{ 'user.email' : { $regex: ?0, $options: 'i' } }")
 Page<Order> getAllPedidosUserEmail(String email, Pageable pageable);

 @Query(value = "{'dataPedido': { $gte: ?0, $lt: ?1 }}", sort = "{'dataPedido': 1}")
 List<Order> findOrdersByDateAndStatus(LocalDateTime startOfDay, LocalDateTime endOfDay, String statusPedido);
 }

