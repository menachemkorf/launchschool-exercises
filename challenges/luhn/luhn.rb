require 'pry'
class Luhn
  def initialize(digits)
    @digits = digits.to_s.chars.map(&:to_i)
  end

  def addends
    result = []
    @digits.reverse.each_with_index do |digit, i|
      if i.odd?
        (digit + digit) > 9 ? digit += digit - 9 : digit += digit
      end
      result.unshift(digit)
    end
    result
  end

  def checksum
    addends.inject { |sum, digit| sum + digit}
  end

  def valid?
    checksum % 10 == 0
  end

  def self.create(number)
    if new(number * 10).valid?
      number * 10
    else
      remainder = new(number * 10).checksum % 10
      (number * 10) + (10 - remainder)
    end
  end
end

# Luhn.new(738).create       #invalid
p Luhn.new(123).checksum

# p Luhn.new(8_739_567).checksum #valid
